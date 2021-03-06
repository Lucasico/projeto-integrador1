class DeleteClientUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute({ clientId }) {
    const clientUpdated = await this.clientRepository.delete({ clientId });
    return clientUpdated;
  }
}

module.exports = { DeleteClientUseCase };
