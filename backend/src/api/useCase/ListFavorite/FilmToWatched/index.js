const listFavoriteRepository = require("../../../repositories/List_favorite");
const listWatchedRepository = require("../../../repositories/List_watched");
const {
  ModifyToWatchedTheMovieUseCase,
} = require("./ModifyToWatchedTheMovieUseCase");
const {
  WatchFavoriteFilmController,
} = require("../../../controllers/ListFavorite/WatchFavoriteFilmController");
const {
  CheckListAlreadyExistsUseCase,
} = require("../../ListWatched/CheckListAlreadyExists/CheckListAlreadyExistsUseCase");
const {
  CreateNewListUseCase,
} = require("../../ListWatched/CreateNewList/CreateNewListUseCase");
const {
  InsertFilmInTheListUseCase,
} = require("../../ListWatched/InsertFilmList/insertFilmInTheListUseCase");

const checkListAlreadyExistsUseCase = new CheckListAlreadyExistsUseCase({
  listWatchedRepository,
});
const createNewListUseCase = new CreateNewListUseCase({
  listWatchedRepository,
});
const insertFilmInTheListUseCase = new InsertFilmInTheListUseCase({
  listWatchedRepository,
});

const modifyToWatchedTheMovieUseCase = new ModifyToWatchedTheMovieUseCase({
  listFavoriteRepository,
});

const watchFavoriteFilmController = new WatchFavoriteFilmController({
  modifyToWatchedTheMovieUseCase,
  checkListAlreadyExistsUseCase,
  createNewListUseCase,
  insertFilmInTheListUseCase,
});

module.exports = {
  modifyToWatchedTheMovieUseCase,
  watchFavoriteFilmController,
};
