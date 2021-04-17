const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class RemoveFilmListController {
  constructor({ removeFilmListFavoriteUseCase }) {
    this.removeFilmListFavoriteUseCase = removeFilmListFavoriteUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = getUserAutenticated(request);
      const { film_id } = request.body;
      const dataToSubmit = {
        user_id: id,
        film_id,
      };

      const removeFilmListFavorite = await this.removeFilmListFavoriteUseCase.execute(
        dataToSubmit
      );
      if (removeFilmListFavorite) {
        return response.status(200).json({
          status: "ok",
          message: "Filme removido da lista de favoritos com sucesso",
        });
      } else {
        return response.status(200).json({
          status: "ok",
          message: "Filme não encontrado na lista",
        });
      }
    } catch (error) {
      console.error("Erro remove film list =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao remover filme da lista de favoritos",
      });
    }
  }
}

module.exports = { RemoveFilmListController };
