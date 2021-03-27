const { getRepository } = require("typeorm");
const Indicate_classification = require("../entities/Indicate_classification");

module.exports = {
  async list() {
    const indicateRepository = getRepository(Indicate_classification);
    const indicateList = await indicateRepository.find();
    return indicateList;
  },
};
