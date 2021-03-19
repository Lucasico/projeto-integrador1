class ListCityByStateController {
  constructor({ listCityByStateUseCase }) {
    this.listCityByStateUseCase = listCityByStateUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = request.params;

      const res = await this.listCityByStateUseCase.execute({
        id,
      });
      return response.status(200).json({
        status: "OK",
        message: "Cidades encontradas com sucesso",
        content: res,
      });
    } catch (error) {
      console.error("error => ", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao listar cidades",
      });
    }
  }
}

module.exports = { ListCityByStateController };
