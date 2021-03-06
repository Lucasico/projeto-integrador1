class CreateClientUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute(data) {
    const client = await this.clientRepository.create(data);
    return client;
  }
}

module.exports = { CreateClientUseCase };
