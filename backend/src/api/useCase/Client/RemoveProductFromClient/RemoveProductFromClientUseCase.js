class RemoveProductFromClientUseCase {
  constructor({ clientRepository }) {
    this.clientRepository = clientRepository;
  }

  async execute({ clientId, productId }) {
    if (!clientId || !productId) throw new Error('ID do cliente e do ID do produto são obrigatórios');

    try {
      const hasRemoved = await this.clientRepository.removeProduct({ clientId, productId });
      return hasRemoved;
    } catch (error) {
      throw new Error('Erro ao executar desativar produto do cliente');
    }
  }
}

module.exports = { RemoveProductFromClientUseCase };
