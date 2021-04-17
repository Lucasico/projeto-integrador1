const listFavoriteRepository = require("../../../repositories/List_favorite");
const listWatchedRepository = require("../../../repositories/List_watched");

const { InsertFilmListFavoriteUseCase } = require("./InserFilmToListUseCase");
const {
  InsertFilmListFavoriteController,
} = require("../../../controllers/ListFavorite/InsertFilmListFavoriteController");
const {
  CheckListAlreadyExistsUseCase,
} = require("../../ListWatched/CheckListAlreadyExists/CheckListAlreadyExistsUseCase");

const {
  VerifyFilmAlreadyExistIntTheListUseCase,
} = require("../../ListWatched/VerifyFilmAlreadyExistIntTheList/VerifyFilmAlreadyExistIntTheListUseCase");

const findListWatchedUseCase = new CheckListAlreadyExistsUseCase({
  listWatchedRepository,
});

const checkFilmAlreadyExistsInTheListUseCase = new VerifyFilmAlreadyExistIntTheListUseCase(
  { listWatchedRepository }
);

const insertFilmListFavoriteUseCase = new InsertFilmListFavoriteUseCase({
  listFavoriteRepository,
});
const insertFimllistFavoriteController = new InsertFilmListFavoriteController({
  insertFilmListFavoriteUseCase,
  findListWatchedUseCase,
  checkFilmAlreadyExistsInTheListUseCase,
});

module.exports = {
  insertFilmListFavoriteUseCase,
  insertFimllistFavoriteController,
};
