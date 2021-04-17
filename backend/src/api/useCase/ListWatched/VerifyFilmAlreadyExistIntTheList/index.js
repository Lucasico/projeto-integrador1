const listWatchedRepository = require("../../../repositories/List_watched");
const {
  VerifyFilmAlreadyExistIntTheListUseCase,
} = require("./VerifyFilmAlreadyExistIntTheListUseCase");

const film = new VerifyFilmAlreadyExistIntTheListUseCase({
  listWatchedRepository,
});

module.exports = { film };
