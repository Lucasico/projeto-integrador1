class ListStateAllUseCase {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
  }

  async execute() {
    const states = await this.stateRepository.listStateAll();
    return states;
  }
}

module.exports = { ListStateAllUseCase };
