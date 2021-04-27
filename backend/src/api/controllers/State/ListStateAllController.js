class ListStateAllController {
  constructor({ listStateAllUseCase }) {
    this.listStateAllUseCase = listStateAllUseCase;
  }

  async handle(request, response) {
    try {
      const res = await this.listStateAllUseCase.execute();
      return response.status(200).json({
        status: "OK",
        message: "Estados encontradas com sucesso",
        content: res,
      });
    } catch (error) {
      console.error("error => ", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao listar estados",
      });
    }
  }
}

module.exports = { ListStateAllController };
