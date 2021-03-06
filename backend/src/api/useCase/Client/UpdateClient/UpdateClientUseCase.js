class UpdateClientUserCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute({
    id,
    name,
    cnpj,
    maxNumberUsers
  }) {
    const clientUpdated = await this.clientRepository.update(id, {
      name,
      cnpj,
      maxNumberUsers
    });

    return clientUpdated;
  }
}

module.exports = { UpdateClientUserCase };
