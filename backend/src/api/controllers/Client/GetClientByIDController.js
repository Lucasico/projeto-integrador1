class GetClientByIDController {
  constructor({ getClientByIDUseCase }) {
    this.getClientByIDUseCase = getClientByIDUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = request.params;
      const client = await this.getClientByIDUseCase.execute({ id });

      return response.status(200).json({
        status: 'OK',
        message: 'Busca realizada com sucesso',
        content: client
      });
    } catch (error) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Erro ao buscar cliente pelo id'
      });
    }
  }
}

module.exports = { GetClientByIDController };
