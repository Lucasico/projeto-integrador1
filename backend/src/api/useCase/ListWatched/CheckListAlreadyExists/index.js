const listWatchedRepository = require("../../../repositories/List_watched");
const {
  CheckListAlreadyExistsUseCase,
} = require("./CheckListAlreadyExistsUseCase");
const {
  CreateNewListUseCase,
} = require("../CreateNewList/CreateNewListUseCase");
const {
  InsertFilmInTheListUseCase,
} = require("../InsertFilmList/insertFilmInTheListUseCase");
const {
  InsertFilmListController,
} = require("../../../controllers/ListWatched/InsertFilmListController");

const checkListAlreadyExistsUseCase = new CheckListAlreadyExistsUseCase({
  listWatchedRepository,
});
const createNewListUseCase = new CreateNewListUseCase({
  listWatchedRepository,
});
const insertFilmInTheListUseCase = new InsertFilmInTheListUseCase({
  listWatchedRepository,
});
const insertFilmListController = new InsertFilmListController({
  checkListAlreadyExistsUseCase,
  createNewListUseCase,
  insertFilmInTheListUseCase,
});

module.exports = { insertFilmListController, checkListAlreadyExistsUseCase };
