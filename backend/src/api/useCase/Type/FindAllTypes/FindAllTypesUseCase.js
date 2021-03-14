class FindAllTypesUseCase {
  constructor({ typeRepository }) {
    this.typeRepository = typeRepository;
  }

  async execute() {
    const types = await this.typeRepository.FindAllTypesUseCase();
    return types;
  }
}

module.exports = { FindAllTypesUseCase };
