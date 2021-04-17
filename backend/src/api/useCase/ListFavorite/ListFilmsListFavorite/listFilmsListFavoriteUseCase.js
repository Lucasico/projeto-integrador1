class ListFilmsListFavoriteUseCase {
  constructor({ listFavoriteRepository }) {
    this.listFavoriteRepository = listFavoriteRepository;
  }

  async execute(id, { pageSize, page }) {
    const filmsInList = await this.listFavoriteRepository.showAllFilmsInList(
      id,
      pageSize,
      page
    );
    return filmsInList;
  }
}

module.exports = { ListFilmsListFavoriteUseCase };
