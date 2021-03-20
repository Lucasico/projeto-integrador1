const userRepository = require("../../../repositories/UserRepository");

const { UpdateUserUseCase } = require("./UpdateUserUseCase");

const {
  UpdateUserController,
} = require("../../../controllers/User/UpdateUserController");

const updateUserUseCase = new UpdateUserUseCase({ userRepository });

const updateUserController = new UpdateUserController({ updateUserUseCase });

module.exports = { updateUserUseCase, updateUserController };
