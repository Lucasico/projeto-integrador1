class ListClientsController {
  constructor({ listClientsUseCase }) {
    this.listClientsUseCase = listClientsUseCase;
  }

  async handle(request, response) {
    try {
      const { page = 1, pageSize = 10 } = request.headers;

      const clientsList = await this.listClientsUseCase.execute({
        page: Number(page),
        pageSize: Number(pageSize)
      });

      return response.status(200).json({
        status: 'OK',
        message: 'Lista de clientes recuperada com sucesso',
        content: clientsList
      });
    } catch (error) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Erro ao buscar clientes'
      });
    }
  }
}

module.exports = { ListClientsController };
