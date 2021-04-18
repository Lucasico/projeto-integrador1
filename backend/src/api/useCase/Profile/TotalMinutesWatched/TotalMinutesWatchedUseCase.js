class TotalMinutesWatchedUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(user_id) {
    console.log("caso de uso");
    const totalMinutesWatchedUseCase = await this.listWatchedRepository.totalMinutesWatched(
      user_id
    );
    return totalMinutesWatchedUseCase;
  }
}

module.exports = { TotalMinutesWatchedUseCase };
