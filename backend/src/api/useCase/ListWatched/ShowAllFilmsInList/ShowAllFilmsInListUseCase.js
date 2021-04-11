class ShowAllFilmsInListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(id) {
    console.log("user_id do caso de uso", id);
    const filmsInList = await this.listWatchedRepository.showAllFilmsInList({
      id,
    });
    return filmsInList;
  }
}

module.exports = { ShowAllFilmsInListUseCase };
