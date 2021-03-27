class ListIndicateClassificationUseCase {
  constructor({ inidicateClassificationRepository }) {
    this.inidicateClassificationRepository = inidicateClassificationRepository;
  }

  async execute() {
    const classifications = await this.inidicateClassificationRepository.list();
    return classifications;
  }
}

module.exports = { ListIndicateClassificationUseCase };
