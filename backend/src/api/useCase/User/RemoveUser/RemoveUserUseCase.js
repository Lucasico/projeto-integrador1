class RemoveUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    const user = await this.userRepository.deleteUser(id);
    return user;
  }
}

module.exports = { RemoveUserUseCase };
