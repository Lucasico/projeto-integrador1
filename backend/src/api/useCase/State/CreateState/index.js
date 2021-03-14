const stateRepository = require("../../../repositories/StateRepository");
const { CreateStateUseCase } = require("./CreateStateUseCase");
const {
  CreateStateController,
} = require("../../../controllers/State/CreateStateController");

const createStateUseCase = new CreateStateUseCase({ stateRepository });
const createStateController = new CreateStateController({
  createStateUseCase,
});

module.exports = { createStateController, createStateUseCase };
