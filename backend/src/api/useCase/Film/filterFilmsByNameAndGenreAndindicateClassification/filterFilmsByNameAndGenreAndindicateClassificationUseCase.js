class FilterFilmsByNameAndGenreAndindicateClassificationUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute({ page = 1, pageSize = 10, query }) {
    const filmList = await this.filmRepository.filterFilmsByNameAndGenreAndindicateClassification(
      {
        page,
        pageSize,
        query,
      }
    );

    return filmList;
  }
}

module.exports = { FilterFilmsByNameAndGenreAndindicateClassificationUseCase };
