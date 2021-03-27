class ShowAllUsersUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ page = 1, pageSize = 10, query }) {
    const usersList = await this.userRepository.showAllUsers({
      page,
      pageSize,
      query,
    });
    return usersList;
  }
}

module.exports = { ShowAllUsersUseCase };
