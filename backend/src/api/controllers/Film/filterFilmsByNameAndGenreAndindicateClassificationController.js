class FilterFilmsByNameAndGenreAndindicateClassificationController {
  constructor({ filterFilmsByNameAndGenreAndindicateClassificationUseCase }) {
    this.filterFilmsByNameAndGenreAndindicateClassificationUseCase = filterFilmsByNameAndGenreAndindicateClassificationUseCase;
  }

  async handle(request, response) {
    try {
      console.log("chegou aqui");
      const { page = 1, pageSize = 10 } = request.headers;
      const { query } = request.query;

      const filmList = await this.filterFilmsByNameAndGenreAndindicateClassificationUseCase.execute(
        {
          page: Number(page),
          pageSize: Number(pageSize),
          query,
        }
      );

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
module.exports = {
  FilterFilmsByNameAndGenreAndindicateClassificationController,
};
