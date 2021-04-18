class AverageMinutesWatchedInRelationToGeneralAverageUseCase {
  constructor({ listWatchedRepository }) {
    this.listWatchedRepository = listWatchedRepository;
  }

  async execute(user_id) {
    const AverageMinutesWatchedInRelationToGeneralAverageUseCase = await this.listWatchedRepository.averageMinutesWatchedInRelationToGeneralAverage(
      user_id
    );
    return AverageMinutesWatchedInRelationToGeneralAverageUseCase;
  }
}

module.exports = { AverageMinutesWatchedInRelationToGeneralAverageUseCase };
