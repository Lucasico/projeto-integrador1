class ShowAllFilmByGenresController {
  constructor({ showFilmByGenresUseCase }) {
    this.showFilmByGenresUseCase = showFilmByGenresUseCase;
  }

  async handle(request, response) {
    try {
      const { page = 1, pageSize = 10 } = request.headers;

      const idStringGenre = request.params.genre;
      const genreId = parseInt(idStringGenre);
      
      const filmList = await this.showFilmByGenresUseCase.execute({
        page: Number(page),
        pageSize: Number(pageSize),
        genreId,
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

module.exports = { ShowAllFilmByGenresController };
