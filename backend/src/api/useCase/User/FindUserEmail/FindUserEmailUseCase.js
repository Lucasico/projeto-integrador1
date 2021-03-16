class FindUserEmailUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    const user = await this.userRepository.findOneUserEmail(data);
    return user;
  }
}

module.exports = { FindUserEmailUseCase };
