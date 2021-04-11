class CreateNewListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(data) {
    const newList = await this.listWatchedRepository.create(data);
    return newList;
  }
}

module.exports = { CreateNewListUseCase };
