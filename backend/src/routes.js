const { Router } = require("express");
const auth = require("./api/middlewares/auth");
const isAdmin = require("./api/middlewares/isAdmin");
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

const { showAllUsersController } = require("./api/useCase/User/ShowAllUsers");

router.get("/health", (_, res) =>
  res.status(200).json({
    serverStatus: "server up",
  })
);

//--auth routes --//
router.post(
  "/authenticate",
  authenticateUserController.handle.bind(authenticateUserController)
);

//--state routes--//
router.post(
  "/states",
  auth,
  createStateController.handle.bind(createStateController)
);

router.get(
  "/states/:id",
  auth,

  listCityByStateController.handle.bind(listCityByStateController)
);

//--types routes --//
router.get(
  "/types",
  auth,
  findAllTypesController.handle.bind(findAllTypesController)
);

//--users routes --//
router.post(
  "/users",
  auth,
  createUserController.handle.bind(createUserController)
);

router.get(
  "/users",
  auth,
  isAdmin,
  showAllUsersController.handle.bind(showAllUsersController)
);

module.exports = { router };
