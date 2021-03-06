class ListClientsUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute({ page = 1, pageSize = 10 }) {
    const clientsList = await this.clientRepository.list({ page, pageSize });
    return clientsList;
  }
}

module.exports = { ListClientsUseCase };
