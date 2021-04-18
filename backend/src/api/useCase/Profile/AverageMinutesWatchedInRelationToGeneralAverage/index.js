const listWatched = require("../../../repositories/List_watched");
const {
  AverageMinutesWatchedInRelationToGeneralAverageUseCase,
} = require("./AverageMinutesWatchedInRelationToGeneralAverageUseCase");
const averageMinutesWatchedInRelationToGeneralAverageUseCase = new AverageMinutesWatchedInRelationToGeneralAverageUseCase(
  {
    listWatched,
  }
);

module.exports = { averageMinutesWatchedInRelationToGeneralAverageUseCase };
