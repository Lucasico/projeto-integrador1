const filmRepository = require("../../../repositories/FilmRepository");

const { CreateFilmUseCase } = require("./CreateFilmUseCase");
const {
  CreateFilmController,
} = require("../../../controllers/Film/CreateFilmController");

const createFilmUseCase = new CreateFilmUseCase({ filmRepository });
const createFilmController = new CreateFilmController({ createFilmUseCase });

module.exports = { createFilmUseCase, createFilmController };
