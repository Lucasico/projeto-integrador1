const listWatchedRepository = require("../../../repositories/List_watched");
const { RemoveFilmListUseCase } = require("./RemoveFilmListUseCase");
const {
  ConfirmedRemoveFilmListUseCase,
} = require("../ConfirmedRemoveFilmList/ConfirmedRemoveFilmListUseCase");
const {
  RemoveFilmListController,
} = require("../../../controllers/ListWatched/RemoveFilmListController");

const removeFilmListUseCase = new ConfirmedRemoveFilmListUseCase({
  listWatchedRepository,
});
const checkListAlreadyExistsUseCase = new RemoveFilmListUseCase({
  listWatchedRepository,
});

const removeFilmListController = new RemoveFilmListController({
  checkListAlreadyExistsUseCase,
  removeFilmListUseCase,
});

module.exports = { checkListAlreadyExistsUseCase, removeFilmListController };
