const userRepository = require("../../../repositories/UserRepository");
const { FindByIdUserUseCase } = require("./ShowLoggedUserProfileUseCase");
const {
  TotalMinutesWatchedUseCase,
} = require("../TotalMinutesWatched/TotalMinutesWatchedUseCase");
const {
  TotalFilmsByGenreUseCase,
} = require("../TotalFilmsByGenre/totalFilmsByGenreUseCase");
const listWatchedRepository = require("../../../repositories/List_watched");
const {
  AverageMinutesWatchedInRelationToGeneralAverageUseCase,
} = require("../AverageMinutesWatchedInRelationToGeneralAverage/AverageMinutesWatchedInRelationToGeneralAverageUseCase");
const {
  ShowLoggedUserProfileController,
} = require("../../../controllers/Profile/ShowLoggedUserProfileController");

const findByIdUserUseCase = new FindByIdUserUseCase({ userRepository });
const totalMinutesWatchedUseCase = new TotalMinutesWatchedUseCase({
  listWatchedRepository,
});
const totalFilmsByGenreUseCase = new TotalFilmsByGenreUseCase({
  listWatchedRepository,
});
const averageMinutesWatchedInRelationToGeneralAverageUseCase = new AverageMinutesWatchedInRelationToGeneralAverageUseCase(
  { listWatchedRepository }
);

const showLoggedUserProfileController = new ShowLoggedUserProfileController({
  findByIdUserUseCase,
  totalMinutesWatchedUseCase,
  totalFilmsByGenreUseCase,
  averageMinutesWatchedInRelationToGeneralAverageUseCase,
});

module.exports = { findByIdUserUseCase, showLoggedUserProfileController };
