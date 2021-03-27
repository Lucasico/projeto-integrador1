class ListGenreUseCase {
  constructor({ genreRepository }) {
    this.genreRepository = genreRepository;
  }

  async execute() {
    const genres = await this.genreRepository.list();
    return genres;
  }
}

module.exports = { ListGenreUseCase };
