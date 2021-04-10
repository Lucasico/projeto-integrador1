class ShowAllFilmByGenresUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute({ page = 1, pageSize = 10, genreId }) {
    const filmList = await this.filmRepository.showFilmsByGenres({
      page,
      pageSize,
      genreId,
    });

    return filmList;
  }
}

module.exports = { ShowAllFilmByGenresUseCase };
