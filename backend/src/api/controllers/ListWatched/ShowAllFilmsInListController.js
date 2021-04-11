const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class ShowAllFilmsInListController {
  constructor({ showAllFilmsInListUseCase }) {
    this.showAllFilmsInListUseCase = showAllFilmsInListUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = getUserAutenticated(request);
      const { page = 1, pageSize = 10 } = request.headers;
      const listOfFavoriteMovies = await this.showAllFilmsInListUseCase.execute(
        id,
        { page: Number(page), pageSize: Number(pageSize) }
      );
      return response.status(200).json({
        status: "ok",
        message: "Filmes da lista recuperados com sucesso",
        content: listOfFavoriteMovies,
      });
    } catch (error) {
      console.error("Erro ao listar filmes =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Error ao exibir filmes da listagem",
      });
    }
  }
}

module.exports = { ShowAllFilmsInListController };
