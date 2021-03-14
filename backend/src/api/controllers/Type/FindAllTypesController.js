class FindAllTypesController {
  constructor({ findAllTypesUseCase }) {
    this.findAllTypesUseCase = findAllTypesUseCase;
  }

  async handle(request, response) {
    try {
      const res = await this.findAllTypesUseCase.execute();

      if (res.length === 0) {
        return response.status(200).json({
          status: "OK",
          message: "Nenhum tipo foi encontrado",
        });
      }
      return response.status(200).json({
        status: "OK",
        message: "Tipos encontrados com sucesso",
        content: res,
      });
    } catch (error) {
      console.error("error => ", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao listar tipos",
      });
    }
  }
}

module.exports = { FindAllTypesController };
