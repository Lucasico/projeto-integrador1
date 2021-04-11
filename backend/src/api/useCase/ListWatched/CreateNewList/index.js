const listWatchedRepository = require("../../../repositories/List_watched");
const { CreateNewListUseCase } = require("./CreateNewListUseCase");

const createNewList = new CreateNewListUseCase({ listWatchedRepository });

module.exports = { createNewList };
