const { getRepository } = require("typeorm");
const State = require("../entities/State");
const City = require("../entities/City");

module.exports = {
  async create(data) {
    const stateRepository = getRepository(State);
    const newState = await stateRepository.save(data);
    return newState;
  },

  async listStateAll() {
    const stateRepository = getRepository(State);
    const states = await stateRepository.find();
    return states;
  },

  async listCityByState(id) {
    const cityRepository = getRepository(City);
    const cities = await cityRepository
      .createQueryBuilder("cities")
      .where("cities.state_id = :id", id)
      .getMany();
    return cities;
  },
};
