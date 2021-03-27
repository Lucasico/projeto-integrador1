const { getRepository } = require("typeorm");
const { saveImage } = require("./ImageRepository");
const Film = require("../entities/Film");

module.exports = {
  
  async findFilmById(id) {
    console.info("chegou aqui brohter");
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
};
