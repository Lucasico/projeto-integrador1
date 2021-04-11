const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class RemoveFilmListController {
  constructor({ checkListAlreadyExistsUseCase, removeFilmListUseCase }) {
    this.checkListAlreadyExistsUseCase = checkListAlreadyExistsUseCase;
    this.removeFilmListUseCase = removeFilmListUseCase;
  }

  async handle(request, response) {
    try {
      //tenho que pegar o id da lista daquele usuario
      //depois disso tenho de mandar esse id da lista junto com id do filme
      const { id } = getUserAutenticated(request);
      const { film_id } = request.body;
      const listByUser = await this.checkListAlreadyExistsUseCase.execute({
        id,
      });
      const dataToSubmit = {
        list_watched_films_id: listByUser.id,
        film_id,
      };
      const removeFilm = await this.removeFilmListUseCase.execute({
        ...dataToSubmit,
      });

      return response.status(removeFilm.statusCodeError || 200).json({
        status: "ok",
        message: "Filme removido com sucesso da sua lista de favoritos",
        content: removeFilm,
      });
    } catch (error) {
      console.error("Error ao remover filme da lista => ", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao remover filme da lista",
      });
    }
  }
}
//18

module.exports = { RemoveFilmListController };
