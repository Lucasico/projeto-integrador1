class ListIndicateClassificationController {
  constructor({ listIndicateClassificationUseCase }) {
    this.listIndicateClassificationUseCase = listIndicateClassificationUseCase;
  }

  async handle(request, response) {
    try {
      const res = await this.listIndicateClassificationUseCase.execute();

      return response.status(200).json({
        status: "OK",
        message: "Classificações encontradas com sucesso",
        content: res,
      });
    } catch (error) {
      console.error("error => ", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao listar Classificações",
      });
    }
  }
}

module.exports = { ListIndicateClassificationController };
