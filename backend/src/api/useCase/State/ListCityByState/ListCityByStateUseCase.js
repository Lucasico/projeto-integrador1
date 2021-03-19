class ListCityByStateUseCase {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
  }

  async execute(id) {
    const cities = await this.stateRepository.listCityByState(id);
    return cities;
  }
}

module.exports = { ListCityByStateUseCase };
