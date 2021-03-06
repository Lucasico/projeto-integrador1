class UpdateClienteController {
  constructor({ updateClientUseCase }) {
    this.updateClientUseCase = updateClientUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = request.params;
      const { name, cnpj, max_number_users: maxNumberUsers } = request.body;

      const clientUpdated = await this.updateClientUseCase.execute({
        id,
        name,
        cnpj,
        maxNumberUsers
      });

      return response.status(200).json({
        status: 'OK',
        message: 'Dados atualizados com sucesso',
        clientUpdated
      });
    } catch (error) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Erro ao atualizar cliente'
      });
    }
  }
}

module.exports = { UpdateClienteController };
