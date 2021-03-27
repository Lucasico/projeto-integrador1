class ListGenreController {
  constructor({ listGenreUseCase }) {
    this.listGenreUseCase = listGenreUseCase;
  }

  async handle(request, response) {
    try {
      const res = await this.listGenreUseCase.execute();

      return response.status(200).json({
        status: "OK",
        message: "Generos encontradas com sucesso",
        content: res,
      });
    } catch (error) {
      console.error("error => ", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao listar generos",
      });
    }
  }
}

module.exports = { ListGenreController };
