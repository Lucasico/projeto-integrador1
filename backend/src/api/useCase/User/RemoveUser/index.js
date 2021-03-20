const userRepository = require("../../../repositories/UserRepository");

const { RemoveUserUseCase } = require("./RemoveUserUseCase");
const {
  DeleteUserController,
} = require("../../../controllers/User/DeleteUserController");

const removeUserUseCase = new RemoveUserUseCase({ userRepository });
const removeUserController = new DeleteUserController({ removeUserUseCase });

module.exports = { removeUserUseCase, removeUserController };
