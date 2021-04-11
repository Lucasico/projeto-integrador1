const listWatchedRepository = require("../../../repositories/List_watched");
const { ShowAllFilmsInListUseCase } = require("./ShowAllFilmsInListUseCase");
const {
  ShowAllFilmsInListController,
} = require("../../../controllers/ListWatched/ShowAllFilmsInListController");

const showAllFilmsInListUseCase = new ShowAllFilmsInListUseCase({
  listWatchedRepository,
});


const showAllFilmsInListController = new ShowAllFilmsInListController({
  showAllFilmsInListUseCase,
});

module.exports = { showAllFilmsInListUseCase, showAllFilmsInListController };
