const { Router, request } = require("express");
const auth = require("./api/middlewares/auth");
const isAdmin = require("./api/middlewares/isAdmin");
const { ROUTESPATH } = require("./utils/getTypes");
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

const { findByIdUserController } = require("./api/useCase/User/FindByIdUser");

const { removeUserController } = require("./api/useCase/User/RemoveUser");

const { updateUserController } = require("./api/useCase/User/UpdateUser");

router.get("/health", (_, res) =>
  res.status(200).json({
    serverStatus: "server up",
  })
);

//--auth routes --//
router.post(
  `${ROUTESPATH.AUTHENTICATE}`,
  authenticateUserController.handle.bind(authenticateUserController)
);

//--state routes--//
router.post(
  `${ROUTESPATH.STATES}`,
  auth,
  createStateController.handle.bind(createStateController)
);

router.get(
  `${ROUTESPATH.STATES}/:id`,
  auth,

  listCityByStateController.handle.bind(listCityByStateController)
);

//--types routes --//
router.get(
  `${ROUTESPATH.TYPES}`,
  auth,
  findAllTypesController.handle.bind(findAllTypesController)
);

//--users routes --//
router.post(
  `${ROUTESPATH.USERS}`,
  auth,
  isAdmin,
  createUserController.handle.bind(createUserController)
);

router.get(
  `${ROUTESPATH.USERS}`,
  auth,
  isAdmin,
  showAllUsersController.handle.bind(showAllUsersController)
);

router.get(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  findByIdUserController.handle.bind(findByIdUserController)
);

router.delete(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  removeUserController.handle.bind(removeUserController)
);

router.put(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  updateUserController.handle.bind(updateUserController)
);

module.exports = { router };
