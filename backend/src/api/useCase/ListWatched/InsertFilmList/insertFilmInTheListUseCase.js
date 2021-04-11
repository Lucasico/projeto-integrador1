class InsertFilmInTheListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(data) {
    const filmAddedToList = await this.listWatchedRepository.addFilmToList(
      data
    );
    return filmAddedToList;
  }
}

module.exports = { InsertFilmInTheListUseCase };
