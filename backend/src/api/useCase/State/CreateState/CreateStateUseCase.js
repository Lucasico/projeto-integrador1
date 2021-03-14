class CreateStateUseCase {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
  }

  async execute(data) {
    const state = await this.stateRepository.create(data);
    return state;
  }
}

module.exports = { CreateStateUseCase };
