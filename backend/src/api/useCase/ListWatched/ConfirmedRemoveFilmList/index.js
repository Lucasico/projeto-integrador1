const listWatchedRepository = require("../../../repositories/List_watched");
const { ConfirmedRemoveFilmListUseCase } = require("./ConfirmedRemoveFilmListUseCase");

const removeFilm = new ConfirmedRemoveFilmListUseCase({
  listWatchedRepository,
});

module.exports = { removeFilm };
