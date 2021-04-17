class VerifyFilmAlreadyExistIntTheListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(list_watched_films_id, film_id) {
    const film = await this.listWatchedRepository.verifyFilmAlreadyExistIntTheList(
      list_watched_films_id,
      film_id
    );
    return film;
  }
}

module.exports = { VerifyFilmAlreadyExistIntTheListUseCase };
