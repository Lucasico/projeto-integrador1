const filmRepository = require("../../../repositories/FilmRepository");

const { FindByIdFilmUseCase } = require("./FindByIdFilmUseCase");
const {
  FindByIdFilmController,
} = require("../../../controllers/Film/FindByIdFilmController");

const findByIdFilmUseCase = new FindByIdFilmUseCase({ filmRepository });
const findByIdFilmController = new FindByIdFilmController({
  findByIdFilmUseCase,
});

module.exports = { findByIdFilmController, findByIdFilmUseCase };
