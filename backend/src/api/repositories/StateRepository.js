const { getRepository } = require("typeorm");
const State = require("../entities/State");
const City = require("../entities/City");

module.exports = {
  async create(data) {
    const stateRepository = getRepository(State);
    const newState = await stateRepository.save(data);
    return newState;
  },

  async listCityByState(id) {
    console.log("chegou no repositorio", id);
    const cityRepository = getRepository(City);
    const cities = cityRepository
      .createQueryBuilder("cities")
      .where("cities.state_id = :id", id)
      .getMany();
    return cities;
  },
};
