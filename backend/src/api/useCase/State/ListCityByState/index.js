const stateRepository = require("../../../repositories/StateRepository");
const { ListCityByStateUseCase } = require("./ListCityByStateUseCase");
const {
  ListCityByStateController,
} = require("../../../controllers/State/ListCityByStateController");

const listCityByStateUseCase = new ListCityByStateUseCase({ stateRepository });
const listCityByStateController = new ListCityByStateController({
  listCityByStateUseCase,
});

module.exports = { listCityByStateUseCase, listCityByStateController };
