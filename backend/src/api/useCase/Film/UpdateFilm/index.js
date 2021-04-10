const filmRepository = require("../../../repositories/FilmRepository");

const { UpdateFilmUseCase } = require("./UpdateFilmUseCase");

const {
  UpdateFilmController,
} = require("../../../controllers/Film/UpdateFilmController");

const updateFilmUseCase = new UpdateFilmUseCase({ filmRepository });
const updateFilmController = new UpdateFilmController({ updateFilmUseCase });

module.exports = { updateFilmUseCase, updateFilmController };
