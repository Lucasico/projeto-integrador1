class ShowAllFilmsUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute({ page = 1, pageSize = 10, query }) {
    const filmList = await this.filmRepository.showAllFilm({
      page,
      pageSize,
      query,
    });

    return filmList;
  }
}

module.exports = { ShowAllFilmsUseCase };
