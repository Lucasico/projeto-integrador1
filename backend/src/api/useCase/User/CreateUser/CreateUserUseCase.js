class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    const user = await this.userRepository.create(data);
    return user;
  }
}

module.exports = { CreateUserUseCase };
