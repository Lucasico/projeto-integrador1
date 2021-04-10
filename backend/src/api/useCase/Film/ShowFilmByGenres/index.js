const filmRepository = require("../../../repositories/FilmRepository");
const { ShowAllFilmByGenresUseCase } = require("./ShowFilmByGenresUseCase");
const {
  ShowAllFilmByGenresController,
} = require("../../../controllers/Film/ShowFilmsByGenresController");

const showFilmByGenresUseCase = new ShowAllFilmByGenresUseCase({
  filmRepository,
});
const showAllFilmByGenresController = new ShowAllFilmByGenresController({
  showFilmByGenresUseCase,
});

module.exports = { showFilmByGenresUseCase, showAllFilmByGenresController };
