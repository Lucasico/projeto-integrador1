class ShowAllFilmController {
  constructor({ showAllFilmUseCase }) {
    this.showAllFilmUseCase = showAllFilmUseCase;
  }

  async handle(request, response) {
    try {
      const { page = 1, pageSize = 10 } = request.headers;
      const { query } = request.query;

      const filmList = await this.showAllFilmUseCase.execute({
        page: Number(page),
        pageSize: Number(pageSize),
        query,
      });

      return response.status(200).json({
        status: "OK",
        message: "Lista de filmes recuperada com sucesso",
        content: filmList,
      });
    } catch (error) {
      console.log("error ao listar filmes", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao buscar filmes",
      });
    }
  }
}
module.exports = { ShowAllFilmController };
