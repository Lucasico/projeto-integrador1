const stateRepository = require("../../../repositories/StateRepository");
const { ListStateAllUseCase } = require("./ListStateAllUseCase");
const {
  ListStateAllController,
} = require("../../../controllers/State/ListStateAllController");

const listStateAllUseCase = new ListStateAllUseCase({ stateRepository });
const listStateAllController = new ListStateAllController({
  listStateAllUseCase,
});

module.exports = { listStateAllUseCase, listStateAllController };
