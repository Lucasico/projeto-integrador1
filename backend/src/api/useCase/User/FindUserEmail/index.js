const userRepository = require("../../../repositories/UserRepository");

const { FindUserEmailUseCase } = require("./FindUserEmailUseCase");
const {
  AuthenticateUserController,
} = require("../../../controllers/Auth/AuthenticateUserController");

const findUserEmailUseCase = new FindUserEmailUseCase({ userRepository });
const authenticateUserController = new AuthenticateUserController({
  findUserEmailUseCase,
});

module.exports = { findUserEmailUseCase, authenticateUserController };
