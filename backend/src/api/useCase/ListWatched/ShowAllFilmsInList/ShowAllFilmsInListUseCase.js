class ShowAllFilmsInListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(id, { pageSize = 10, page }) {
    console.log("user_id do caso de uso", id);
    const filmsInList = await this.listWatchedRepository.showAllFilmsInList({
      id,
      page,
      pageSize,
    });
    return filmsInList;
  }
}

module.exports = { ShowAllFilmsInListUseCase };
