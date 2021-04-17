class RemoveFilmListFavoriteUseCase {
  constructor({ listFavoriteRepository }) {
    this.listFavoriteRepository = listFavoriteRepository;
  }

  async execute(data) {
    const itemList = await this.listFavoriteRepository.removeFilmToList(data);
    return itemList;
  }
}

module.exports = { RemoveFilmListFavoriteUseCase };
