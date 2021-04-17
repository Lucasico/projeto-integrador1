const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class ListFilmsListFavoriteController {
  constructor({ listFilmsListFavoriteUseCase }) {
    this.listFilmsListFavoriteUseCase = listFilmsListFavoriteUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = getUserAutenticated(request);
      const { page = 1, pagesize = 10 } = request.headers;
      const listOfFavoriteMovies = await this.listFilmsListFavoriteUseCase.execute(
        id,
        { page: Number(page), pageSize: Number(pagesize) }
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

module.exports = { ListFilmsListFavoriteController };
