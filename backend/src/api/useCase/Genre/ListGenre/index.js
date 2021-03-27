const genreRepository = require("../../../repositories/GenreRepository");
const { ListGenreUseCase } = require("./ListGenreUseCase");
const {
  ListGenreController,
} = require("../../../controllers/Genre/ListGenreController");

const listGenreUseCase = new ListGenreUseCase({ genreRepository });
const listGenreController = new ListGenreController({ listGenreUseCase });

module.exports = { listGenreController, listGenreUseCase };
