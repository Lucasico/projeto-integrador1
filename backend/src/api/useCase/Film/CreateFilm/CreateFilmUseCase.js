class CreateFilmUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute(data) {
    const film = await this.filmRepository.create(data);
    return film;
  }
}

module.exports = { CreateFilmUseCase };
