class DeleteClientController {
  constructor({ deleteClientUseCase }) {
    this.deleteClientUseCase = deleteClientUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = request.params;

      const clientRemoved = await this.deleteClientUseCase.execute({ clientId: id });

      return response.status(200).json({
        status: 'OK',
        message: 'Cliente deletado com sucesso',
        clientRemoved
      });
    } catch (error) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Erro ao apagar cliente'
      });
    }
  }
}

module.exports = { DeleteClientController };
