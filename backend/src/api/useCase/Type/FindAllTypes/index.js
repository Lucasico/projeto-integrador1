const typeRepository = require("../../../repositories/TypesRepository");

const { FindAllTypesUseCase } = require("./FindAllTypesUseCase");
const {
  FindAllTypesController,
} = require("../../../controllers/Type/FindAllTypesController");

const findAllTypesUseCase = new FindAllTypesUseCase({ typeRepository });
const findAllTypesController = new FindAllTypesController({
  findAllTypesUseCase,
});

module.exports = { findAllTypesController, findAllTypesUseCase };
