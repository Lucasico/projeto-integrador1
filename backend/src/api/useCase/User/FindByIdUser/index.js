const userRepository = require("../../../repositories/UserRepository");

const { FindByIdUserUseCase } = require("./FindByIdUserUseCase");
const {
  FindByIdUserController,
} = require("../../../controllers/User/FindByIDUserController");

const findByIdUserUseCase = new FindByIdUserUseCase({ userRepository });
const findByIdUserController = new FindByIdUserController({
  findByIdUserUseCase,
});

module.exports = { findByIdUserUseCase, findByIdUserController };
