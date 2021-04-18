class TotalFilmsByGenreUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(user_id) {
    console.log("caso de uso");
    const totalMinutesWatchedUseCase = await this.listWatchedRepository.totalFilmsByGenre(
      user_id
    );
    return totalMinutesWatchedUseCase;
  }
}

module.exports = { TotalFilmsByGenreUseCase };
