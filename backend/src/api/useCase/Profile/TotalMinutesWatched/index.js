const listWatched = require("../../../repositories/List_watched");
const { TotalMinutesWatchedUseCase } = require("./TotalMinutesWatchedUseCase");
const totalMinutesWatchedUseCase = new TotalMinutesWatchedUseCase({
  listWatched,
});

module.exports = { totalMinutesWatchedUseCase };
