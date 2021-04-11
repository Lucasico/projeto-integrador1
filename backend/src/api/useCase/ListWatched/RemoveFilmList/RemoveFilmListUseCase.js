class RemoveFilmListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(user_id) {
    const list = await this.listWatchedRepository.findListById(user_id);
    return list;
  }
}

module.exports = { RemoveFilmListUseCase };
