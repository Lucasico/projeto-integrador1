class FindByIdFilmUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute({ id }) {
    const film = await this.filmRepository.findFilmById(id);

    return film;
  }
}

module.exports = { FindByIdFilmUseCase };
