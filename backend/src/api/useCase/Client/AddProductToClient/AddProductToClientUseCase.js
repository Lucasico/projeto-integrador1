class AddProdutToClientUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute(data) {
    const client = await this.clientRepository.addProduct(data);
    return client;
  }
}

module.exports = { AddProdutToClientUseCase };
