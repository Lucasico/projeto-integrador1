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
  ShowLoggedUserProfileController,
} = require("../../../controllers/Profile/ShowLoggedUserProfileController");

const findByIdUserUseCase = new FindByIdUserUseCase({ userRepository });
const totalMinutesWatchedUseCase = new TotalMinutesWatchedUseCase({
  listWatchedRepository,
});
const totalFilmsByGenreUseCase = new TotalFilmsByGenreUseCase({
  listWatchedRepository,
});

const showLoggedUserProfileController = new ShowLoggedUserProfileController({
  findByIdUserUseCase,
  totalMinutesWatchedUseCase,
  totalFilmsByGenreUseCase,
});

module.exports = { findByIdUserUseCase, showLoggedUserProfileController };
