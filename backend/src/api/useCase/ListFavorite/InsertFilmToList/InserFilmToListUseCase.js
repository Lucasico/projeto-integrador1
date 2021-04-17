class InsertFilmListFavoriteUseCase {
  constructor({ listFavoriteRepository }) {
    this.listFavoriteRepository = listFavoriteRepository;
  }

  async execute(data) {
    console.log("chegou no caso de uso");
    const itemList = await this.listFavoriteRepository.insert(data);
    return itemList;
  }
}

module.exports = { InsertFilmListFavoriteUseCase };
