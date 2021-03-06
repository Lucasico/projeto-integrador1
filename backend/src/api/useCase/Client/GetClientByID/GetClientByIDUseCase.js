class GetClientByIDUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute({ id }) {
    const client = await this.clientRepository.getById({ id });
    return client;
  }
}

module.exports = { GetClientByIDUseCase };
