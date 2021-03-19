const userRepository = require("../../../repositories/UserRepository");
const { ShowAllUsersUseCase } = require("./ShowAllUsersUseCase");
const {
  ShowAllUsersController,
} = require("../../../controllers/User/ShowAllUsersController");

const showAllUsersUseCase = new ShowAllUsersUseCase({ userRepository });
const showAllUsersController = new ShowAllUsersController({
  showAllUsersUseCase,
});

module.exports = { showAllUsersUseCase, showAllUsersController };
