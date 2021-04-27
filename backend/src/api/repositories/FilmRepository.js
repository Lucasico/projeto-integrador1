const { getRepository } = require("typeorm");
const { saveImage } = require("./ImageRepository");
const { deleteFile } = require("../../utils/deleteFiles");
const Film = require("../entities/Film");

module.exports = {
  async findFilmById(id) {
    const filmRepository = getRepository(Film);
    const filmeReturn = await filmRepository.findOne({
      relations: ["indicate_classification", "genre", "image"],
      where: { id },
    });

    return filmeReturn;
  },

  async deleteUser({ id }) {
    const filmRepository = getRepository(Film);

    const filmToBeExcluded = await filmRepository.findOne(id);

    if (!filmToBeExcluded) return apiError(400, "Film Not found");

    await filmRepository.remove(filmToBeExcluded);

    return filmToBeExcluded;
  },

  async create({ dataToSubmit }) {
    const filmRepository = getRepository(Film);
    const newFilmImage = await saveImage(dataToSubmit.path);
    const { id } = newFilmImage;
    const { body } = dataToSubmit;
    const dataForRegistration = { ...body, images_id: id };

    const newFilm = await filmRepository.save(dataForRegistration);

    const filmeReturn = this.findFilmById(newFilm.id);

    return filmeReturn;
  },

  async updateFilm(resourceId, newData) {
    const filmRepository = getRepository(Film);
    let filmToBeUpdate = await this.findFilmById(resourceId);
    const { image } = filmToBeUpdate;
    const deleteImageOld = await deleteFile(image.path);

    if (deleteImageOld) {
      const newFilmImage = await saveImage(newData.path);
      const { id } = newFilmImage;
      const { body } = newData;

      const dataForRegistration = {
        indicate_classifications_id: body.indicate_classifications_id,
        genre_id: body.genre_id,
        name: body.name,
        date_release: body.date_release,
        synopsis: body.synopsis,
        duration: body.duration,
        images_id: id,
      };

      await filmRepository.update(resourceId, dataForRegistration);

      return await this.findFilmById(resourceId);
    }
  },

  async showAllFilm({ page = 1, pageSize = 10, query }) {
    const filmRepository = getRepository(Film);
    const offset = (page - 1) * pageSize;
    const [filmList, quantity] = await filmRepository
      .createQueryBuilder("films")
      .select([
        "films.id",
        "films.name",
        "films.indicate_classifications_id",
        "films.genre_id",
        "films.images_id",
        "films.date_release",
        "films.synopsis",
        "films.duration",
      ])
      .leftJoinAndSelect(
        "films.indicate_classification",
        "indicate_classification"
      )
      .leftJoinAndSelect("films.genre", "genre")
      .leftJoinAndSelect("films.image", "image")
      .where("LOWER(films.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .orWhere("LOWER(genre.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })

      .orWhere("LOWER(indicate_classification.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .take(pageSize)
      .skip(offset)
      .orderBy("films.name", "ASC")
      .getManyAndCount();

    return { filmList, quantity, currentPage: page };
  },

  async showFilmsByGenres({ page = 1, pageSize = 10, genreId }) {
    console.log("page", page, "pagesize", pageSize, "genreid", genreId);
    //receber a id referente ao tipo
    const filmRepository = getRepository(Film);
    const offset = (page - 1) * pageSize;
    const [filmList, quantity] = await filmRepository
      .createQueryBuilder("films")
      .select([
        "films.id",
        "films.name",
        "films.indicate_classifications_id",
        "films.genre_id",
        "films.images_id",
      ])
      .leftJoinAndSelect("films.image", "image")
      .leftJoinAndSelect(
        "films.indicate_classification",
        "indicate_classification"
      )
      .where("films.genre_id = :genre", { genre: `${genreId || ""}` })
      .take(pageSize)
      .skip(offset)
      .orderBy("films.name", "ASC")
      .getManyAndCount();

    return { filmList, quantity, currentPage: page };
  },

  async filterFilmsByNameAndGenreAndindicateClassification({
    page = 1,
    pageSize = 10,
    query,
  }) {
    const filmRepository = getRepository(Film);
    const offset = (page - 1) * pageSize;
    const [filmList, quantity] = await filmRepository
      .createQueryBuilder("films")
      .select([
        "films.id",
        "films.name",
        "films.indicate_classifications_id",
        "films.genre_id",
        "films.images_id",
      ])
      .leftJoinAndSelect("films.genre", "genre")
      .leftJoinAndSelect("films.image", "image")
      .leftJoinAndSelect(
        "films.indicate_classification",
        "indicate_classification"
      )
      .where("LOWER(films.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .orWhere("LOWER(genre.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .orWhere("LOWER(indicate_classification.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .take(pageSize)
      .skip(offset)
      .orderBy("films.name", "ASC")
      .getManyAndCount();

    return { filmList, quantity, currentPage: page };
  },
};
