class ConfirmedRemoveFilmListUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute({ list_watched_films_id, film_id }) {
    console.log("chegou no caso de uso");
    const removedFilm = await this.listWatchedRepository.removeFilmToList({
      list_watched_films_id,
      film_id,
    });

    return removedFilm;
  }
}

module.exports = { ConfirmedRemoveFilmListUseCase };
