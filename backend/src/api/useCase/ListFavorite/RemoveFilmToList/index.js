const listFavoriteRepository = require("../../../repositories/List_favorite");
const { RemoveFilmListFavoriteUseCase } = require("./RemoveFilmToListUseCase");
const {
  RemoveFilmListController,
} = require("../../../controllers/ListFavorite/RemoveFilmListFavoriteController");

const removeFilmListFavoriteUseCase = new RemoveFilmListFavoriteUseCase({
  listFavoriteRepository,
});
const removeFimllistFavoriteController = new RemoveFilmListController({
  removeFilmListFavoriteUseCase,
});

module.exports = {
  removeFimllistFavoriteController,
  removeFilmListFavoriteUseCase,
};
