class FindByIdUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ id, type_id, city_id, name, email, telephone }) {
    const user = await this.userRepository.findByIdUser(id, {
      type_id,
      city_id,
      name,
      email,
      telephone,
    });

    return user;
  }
}

module.exports = { FindByIdUserUseCase };
