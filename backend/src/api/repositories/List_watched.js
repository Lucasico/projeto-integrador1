const { getRepository } = require("typeorm");
const { apiError } = require("../../utils/apiError");
const listWatchRepository = require("../entities/List_watched_film");
const listWatchRepositoryHasFilm = require("../entities/List_watched_has_films");
module.exports = {
  async create(data) {
    const listRepository = getRepository(listWatchRepository);
    const newList = await listRepository.save(data);
    return newList;
  },

  async findListById(user_id) {
    const listRepository = getRepository(listWatchRepository);
    const list = await listRepository.findOne({
      where: { user_id },
    });

    return list;
  },

  async addFilmToList(data) {
    const listWatchRepository = getRepository(listWatchRepositoryHasFilm);
    const filmAlreadyInsertInTheList = await listWatchRepository.findOne({
      where: {
        list_watched_films_id: data.list_watched_films_id,
        film_id: data.film_id,
      },
    });
    if (filmAlreadyInsertInTheList) {
      return false;
    } else {
      const addNewFilmToList = await listWatchRepository.save(data);
      const returnNewFilmList = await listWatchRepository.findOne({
        where: {
          list_watched_films_id: addNewFilmToList.list_watched_films_id,
          film_id: addNewFilmToList.film_id,
        },
      });
      return returnNewFilmList;
    }
  },

  async removeFilmToList({ list_watched_films_id, film_id }) {
    const listWatchRepository = getRepository(listWatchRepositoryHasFilm);

    const filmRemove = await listWatchRepository.findOne({
      where: {
        list_watched_films_id,
        film_id,
      },
    });

    if (!filmRemove) return apiError(400, "Filme não encontrado na lista");

    await listWatchRepository.remove(filmRemove);

    return filmRemove;
  },

  async showAllFilmsInList(user_id, page = 1, pageSize = 10) {
    const listRepository = getRepository(listWatchRepository);
    const listRepositoryHasFilms = getRepository(listWatchRepositoryHasFilm);
    //pego a lista com base no id do usuario
    const { id } = await listRepository.findOne({
      where: { user_id },
    });

    const offset = (page - 1) * pageSize;

    const [listFavoriteMovies, quantity] = await listRepositoryHasFilms
      .createQueryBuilder("list_watched_has_films")
      .select([
        "list_watched_has_films.list_watched_films_id",
        "list_watched_has_films.film_id",
        "list_watched_has_films.date_insertion",
      ])

      .leftJoinAndSelect("list_watched_has_films.films", "films")
      .leftJoinAndSelect(
        "films.indicate_classification",
        "indicate_classification"
      )
      .leftJoinAndSelect("films.image", "image")
      .where("list_watched_has_films.list_watched_films_id = :id", { id: id })
      .take(pageSize)
      .skip(offset)
      .orderBy("list_watched_has_films.date_insertion", "ASC")
      .getManyAndCount();

    return { listFavoriteMovies, quantity, currentPage: page };
  },

  async verifyFilmAlreadyExistIntTheList(list_watched_films_id, film_id) {
    console.log(list_watched_films_id);
    console.log(film_id);
    const listRepository = getRepository(listWatchRepositoryHasFilm);
    const filmAlreadyInsertInTheList = await listRepository.findOne({
      where: {
        list_watched_films_id: list_watched_films_id,
        film_id: film_id,
      },
    });
    return filmAlreadyInsertInTheList;
  },

  async totalMinutesWatched(user_id) {
    const listRepository = getRepository(listWatchRepository);
    const listWatchFilmsRepository = getRepository(listWatchRepositoryHasFilm);

    const { id } = await listRepository.findOne({
      where: { user_id },
    });

    const { sum } = await listWatchFilmsRepository
      .createQueryBuilder("list_watched_has_films")
      .select("SUM(films.duration)", "sum")
      .leftJoin("list_watched_has_films.films", "films")
      .where("list_watched_has_films.list_watched_films_id = :id", { id: id })
      .getRawOne();

    return sum;
  },

  async totalFilmsByGenre(user_id) {
    const listRepository = getRepository(listWatchRepository);
    const listWatchFilmsRepository = getRepository(listWatchRepositoryHasFilm);

    const { id } = await listRepository.findOne({
      where: { user_id },
    });

    const countFilmByGenre = await listWatchFilmsRepository
      .createQueryBuilder("list_watched_has_films")
      .select("genre.name")
      .addSelect("COUNT(films.genre)", "count")
      .leftJoin("list_watched_has_films.films", "films")
      .leftJoin("films.genre", "genre")
      .where("list_watched_has_films.list_watched_films_id = :id", { id: id })
      .groupBy("genre.name")
      .getRawMany();

    return countFilmByGenre;
  },

  async averageMinutesWatchedInRelationToGeneralAverage(user_id) {
    const listRepository = getRepository(listWatchRepository);
    const listWatchFilmsRepository = getRepository(listWatchRepositoryHasFilm);

    const { id } = await listRepository.findOne({
      where: { user_id },
    });

    const { averageUser } = await listWatchFilmsRepository
      .createQueryBuilder("list_watched_has_films")
      .select("AVG(films.duration)", "averageUser")
      .leftJoin("list_watched_has_films.films", "films")
      .where("list_watched_has_films.list_watched_films_id = :id", { id: id })
      .getRawOne();

    const {
      averageGeneral,
    } = await listWatchFilmsRepository
      .createQueryBuilder("list_watched_has_films")
      .select("AVG(films.duration)", "averageGeneral")
      .leftJoin("list_watched_has_films.films", "films")
      .getRawOne();

    return { averageUser, averageGeneral };
  },
};
