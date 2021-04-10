class UpdateFilmUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute(id, newData) {
    const film = await this.filmRepository.updateFilm(id, newData);
    return film;
  }
}

module.exports = { UpdateFilmUseCase };
