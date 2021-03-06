class CreateClientController {
  constructor({ createClientUseCase }) {
    this.createClientUseCase = createClientUseCase;
  }

  async handle(request, response) {
    try {
      const { name, cnpj, max_number_users: maxNumberUsers } = request.body;

      const res = await this.createClientUseCase.execute({
        name,
        cnpj,
        max_number_users: maxNumberUsers
      });

      return response.status(201).json({
        status: 'OK',
        message: 'Cliente cadastrado com sucesso',
        content: res
      });
    } catch (error) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Erro ao criar cliente'
      });
    }
  }
}

module.exports = { CreateClientController };
