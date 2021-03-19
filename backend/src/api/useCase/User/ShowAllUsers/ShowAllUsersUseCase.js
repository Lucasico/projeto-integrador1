class ShowAllUsersUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ page = 1, pageSize = 10 }) {
    const usersList = await this.userRepository.showAllUsers({
      page,
      pageSize,
    });
    return usersList;
  }
}

module.exports = { ShowAllUsersUseCase };
