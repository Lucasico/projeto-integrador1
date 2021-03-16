const { Router } = require("express");

const router = Router();

const { createStateController } = require("./api/useCase/State/CreateState");
const {
  listCityByStateController,
} = require("./api/useCase/State/ListCityByState");
const { findAllTypesController } = require("./api/useCase/Type/FindAllTypes");

const { createUserController } = require("./api/useCase/User/CreateUser");
const {
  authenticateUserController,
} = require("./api/useCase/User/FindUserEmail");

router.get("/health", (_, res) =>
  res.status(200).json({
    serverStatus: "server up",
  })
);

//--state routes--//
router.post(
  "/states",
  createStateController.handle.bind(createStateController)
);

router.get(
  "/states/:id",
  listCityByStateController.handle.bind(listCityByStateController)
);

//--types routes --//
router.get(
  "/types",
  findAllTypesController.handle.bind(findAllTypesController)
);

//--users routes --//
router.post("/users", createUserController.handle.bind(createUserController));

//--auth routes --//
router.post(
  "/authenticate",
  authenticateUserController.handle.bind(authenticateUserController)
);
module.exports = { router };
