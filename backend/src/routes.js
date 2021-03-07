const { Router } = require("express");

const router = Router();

const { createClientController } = require("./api/useCase/Client/CreateClient");
const { listClientsController } = require("./api/useCase/Client/ListClientes");
const {
  getClientByIDController,
} = require("./api/useCase/Client/GetClientByID");
const { updateClientController } = require("./api/useCase/Client/UpdateClient");
const { deleteClientController } = require("./api/useCase/Client/DeleteClient");

router.get("/health", (_, res) =>
  res.status(200).json({
    serverStatus: "server up",
  })
);

router.get(
  "/clients",
  listClientsController.handle.bind(listClientsController)
);
router.get(
  "/clients/:id",
  getClientByIDController.handle.bind(getClientByIDController)
);
router.post(
  "/clients",
  createClientController.handle.bind(createClientController)
);
router.put(
  "/clients/:id",
  updateClientController.handle.bind(updateClientController)
);
router.delete(
  "/clients/:id",
  deleteClientController.handle.bind(deleteClientController)
);
module.exports = { router };
