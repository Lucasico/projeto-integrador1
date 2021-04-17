const { getRepository } = require("typeorm");
const { apiError } = require("../../utils/apiError");
const favoriteList = require("../entities/Favorite_list");

module.exports = {
  async insert(data) {
    const listRepository = getRepository(favoriteList);
    const filmAlreadyInsertInTheList = await listRepository.findOne({
      where: {
        user_id: data.user_id,
        film_id: data.film_id,
      },
    });
    if (filmAlreadyInsertInTheList) {
      return false;
    } else {
      const newFilmInsert = await listRepository.save(data);
      return newFilmInsert;
    }
  },

  async removeFilmToList({ user_id, film_id }) {
    const listRepository = getRepository(favoriteList);

    const filmRemove = await listRepository.findOne({
      where: {
        user_id,
        film_id,
      },
    });

    if (!filmRemove) return false;

    await listRepository.remove(filmRemove);

    return filmRemove;
  },

  async showAllFilmsInList(user_id, pageSize, page) {
    console.log("user", user_id, "page", page, "pageSize", pageSize);
    const listRepository = getRepository(favoriteList);

    const offset = (page - 1) * pageSize;

    const [listFavoriteMovies, quantity] = await listRepository
      .createQueryBuilder("favorite_list")
      .select([
        "favorite_list.user_id",
        "favorite_list.film_id",
        "favorite_list.watched",
      ])

      .leftJoinAndSelect("favorite_list.films", "films")
      .leftJoinAndSelect(
        "films.indicate_classification",
        "indicate_classification"
      )
      .leftJoinAndSelect("films.image", "image")
      .where("favorite_list.user_id = :id", { id: user_id })
      .take(pageSize)
      .skip(offset)
      .orderBy("favorite_list.watched", "ASC")
      .getManyAndCount();

    return { listFavoriteMovies, quantity, currentPage: page };
  },

  async modifyToWatchedTheMovie(user_id, film_id, data) {
    const listRepository = getRepository(favoriteList);
    const filmToWatched = await listRepository.findOne({
      where: { user_id: user_id, film_id: film_id },
    });

    if (!filmToWatched) return apiError(400, "Filme Não Encontrado");

    if (filmToWatched.watched) {
      return apiError(400, "Filme já foi assistido");
    }

    filmToWatched.watched = data.watched;

    await listRepository.save(filmToWatched);

    return filmToWatched;
  },
};
