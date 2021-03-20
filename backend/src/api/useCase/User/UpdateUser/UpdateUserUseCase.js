class UpdateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(id, newData) {
    const user = await this.userRepository.updateUser(id, newData);
    return user;
  }
}

module.exports = { UpdateUserUseCase };
