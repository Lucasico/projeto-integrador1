const { getRepository } = require("typeorm");
const Types = require("../entities/type");

module.exports = {
  async FindAllTypesUseCase() {
    const typeRepository = getRepository(Types);
    const types = typeRepository.find();
    return types;
  },
};
