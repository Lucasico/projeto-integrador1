class FindByIdUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ id }) {
    const user = await this.userRepository.findByIdUser(id);
    return user;
  }
}

module.exports = { FindByIdUserUseCase };
