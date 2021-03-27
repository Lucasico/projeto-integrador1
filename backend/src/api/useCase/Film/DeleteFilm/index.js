const filmRepository = require("../../../repositories/FilmRepository");
const { DeleteFilmUseCase } = require("./DeleteFilmUseCase");
const {
  DeleteFilmController,
} = require("../../../controllers/Film/DeleteFilmController");

const deleteFilmUseCase = new DeleteFilmUseCase({ filmRepository });
const deleteFilmController = new DeleteFilmController({ deleteFilmUseCase });

module.exports = { deleteFilmUseCase, deleteFilmController };
