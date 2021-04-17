const listFavoriteRepository = require("../../../repositories/List_favorite");
const {
  ListFilmsListFavoriteUseCase,
} = require("./listFilmsListFavoriteUseCase");

const {
  ListFilmsListFavoriteController,
} = require("../../../controllers/ListFavorite/ListFilmsListFavoriteController");
const listFilmsListFavoriteUseCase = new ListFilmsListFavoriteUseCase({
  listFavoriteRepository,
});

const listFilmsListFavoriteController = new ListFilmsListFavoriteController({
  listFilmsListFavoriteUseCase,
});

module.exports = {
  listFilmsListFavoriteController,
  listFilmsListFavoriteUseCase,
};
