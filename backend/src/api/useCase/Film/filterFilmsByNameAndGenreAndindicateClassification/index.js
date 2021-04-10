const filmRepository = require("../../../repositories/FilmRepository");
const {
  FilterFilmsByNameAndGenreAndindicateClassificationUseCase,
} = require("./filterFilmsByNameAndGenreAndindicateClassificationUseCase");
const {
  FilterFilmsByNameAndGenreAndindicateClassificationController,
} = require("../../../controllers/Film/filterFilmsByNameAndGenreAndindicateClassificationController");

const filterFilmsByNameAndGenreAndindicateClassificationUseCase = new FilterFilmsByNameAndGenreAndindicateClassificationUseCase(
  { filmRepository }
);

const filterFilmsByNameAndGenreAndindicateClassificationController = new FilterFilmsByNameAndGenreAndindicateClassificationController(
  { filterFilmsByNameAndGenreAndindicateClassificationUseCase }
);

module.exports = {
  filterFilmsByNameAndGenreAndindicateClassificationUseCase,
  filterFilmsByNameAndGenreAndindicateClassificationController,
};
