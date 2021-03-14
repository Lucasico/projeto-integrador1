class ListCityByStateUseCase {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
  }

  async execute(id) {
    console.log("chegou no caso de uso");
    const cities = await this.stateRepository.listCityByState(id);
    return cities;
  }
}

module.exports = { ListCityByStateUseCase };
