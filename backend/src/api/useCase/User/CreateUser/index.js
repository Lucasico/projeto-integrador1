
const userRepository = require("../../../repositories/UserRepository");

const { CreateUserUseCase } = require("./CreateUserUseCase");
const {
  CreateUserController,
} = require("../../../controllers/User/CreateUserController");

const createUserUseCase = new CreateUserUseCase({ userRepository });
const createUserController = new CreateUserController({
  createUserUseCase,
});

module.exports = { createUserUseCase, createUserController };
