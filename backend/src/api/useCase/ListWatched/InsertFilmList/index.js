const listWatchedRepository = require("../../../repositories/List_watched");
const { InsertFilmInTheListUseCase } = require("./insertFilmInTheListUseCase");

const insertFilmInTheListUseCase = new InsertFilmInTheListUseCase({
  listWatchedRepository,
});

module.exports = { InsertFilmInTheListUseCase };
