class CreateStateController {
  constructor({ createStateUseCase }) {
    this.createStateUseCase = createStateUseCase;
  }

  async handle(request, response) {
    try {
      const { name } = request.body;
      const res = await this.createStateUseCase.execute({
        name,
      });
      return response.status(201).json({
        status: "OK",
        message: "Estado cadastrado com sucesso",
        content: res,
      });
    } catch (error) {
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao criar estado",
      });
    }
  }
}

module.exports = { CreateStateController };
