class DeleteFilmUseCase {
  constructor({ filmRepository }) {
    this.filmRepository = filmRepository;
  }

  async execute(id) {
    const film = await this.filmRepository.deleteUser(id);
    return film;
  }
}

module.exports = { DeleteFilmUseCase };
