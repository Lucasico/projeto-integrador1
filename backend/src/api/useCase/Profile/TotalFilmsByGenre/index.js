const listWatched = require("../../../repositories/List_watched");
const { TotalFilmsByGenreUseCase } = require("./totalFilmsByGenreUseCase");
const totalMinutesWatchedUseCase = new TotalFilmsByGenreUseCase({
  listWatched,
});

module.exports = { totalMinutesWatchedUseCase };
