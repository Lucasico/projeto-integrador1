class ModifyToWatchedTheMovieUseCase {
  constructor({ listFavoriteRepository }) {
    this.listFavoriteRepository = listFavoriteRepository;
  }

  async execute(user_id, film_id, data) {
    const film = await this.listFavoriteRepository.modifyToWatchedTheMovie(
      user_id,
      film_id,
      data
    );
    return film;
  }
}

module.exports = { ModifyToWatchedTheMovieUseCase };
