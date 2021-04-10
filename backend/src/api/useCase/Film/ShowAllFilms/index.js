const filmRepository = require("../../../repositories/FilmRepository");
const { ShowAllFilmsUseCase } = require("./ShowAllFilmsUseCase");
const {
  ShowAllFilmController,
} = require("../../../controllers/Film/ShowAllFilmController");

const showAllFilmUseCase = new ShowAllFilmsUseCase({ filmRepository });
const showAllFimlController = new ShowAllFilmController({ showAllFilmUseCase });

module.exports = { showAllFilmUseCase, showAllFimlController };
