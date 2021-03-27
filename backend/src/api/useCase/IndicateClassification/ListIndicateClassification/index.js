const inidicateClassificationRepository = require("../../../repositories/IndicateClassification");
const {
  ListIndicateClassificationUseCase,
} = require("./ListIndicateClassificationUseCase");
const {
  ListIndicateClassificationController,
} = require("../../../controllers/IndicateClassification/ListIndicateClassificationController");

const listIndicateClassificationUseCase = new ListIndicateClassificationUseCase(
  { inidicateClassificationRepository }
);
const listIndicateClassificationController = new ListIndicateClassificationController(
  { listIndicateClassificationUseCase }
);

module.exports = {
  listIndicateClassificationUseCase,
  listIndicateClassificationController,
};
