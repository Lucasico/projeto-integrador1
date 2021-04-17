const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class InsertFilmListFavoriteController {
  constructor({
    insertFilmListFavoriteUseCase,
    findListWatchedUseCase,
    checkFilmAlreadyExistsInTheListUseCase,
  }) {
    this.insertFilmListFavoriteUseCase = insertFilmListFavoriteUseCase;
    this.findListWatchedUseCase = findListWatchedUseCase;
    this.checkFilmAlreadyExistsInTheListUseCase = checkFilmAlreadyExistsInTheListUseCase;
  }

  async handle(request, response) {
    try {
      const { id } = getUserAutenticated(request);
      const { film_id } = request.body;

      const dataToSubmit = {
        user_id: id,
        film_id,
        watched: false,
      };

      const checkListAlreadyExists = await this.findListWatchedUseCase.execute(
        id
      );

      if (checkListAlreadyExists) {
        const listId = checkListAlreadyExists.id;
        const checkFilmAlreadyExistsInTheList = await this.checkFilmAlreadyExistsInTheListUseCase.execute(
          listId,
          film_id
        );
        if (checkFilmAlreadyExistsInTheList) {
          dataToSubmit.watched = true;
        }
      }
      
      const newAddFilmFavoriteList = await this.insertFilmListFavoriteUseCase.execute(
        dataToSubmit
      );

      if (newAddFilmFavoriteList) {
        return response.status(200).json({
          status: "ok",
          message: "Filme adicionado com sucesso a lista de favoritos",
        });
      } else {
        return response.status(200).json({
          status: "ok",
          message: "Este filme já se encontra na sua lista de favoritos",
        });
      }
    } catch (error) {
      console.error("Erro add film list =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao adicionar filme a lista de favoritos",
      });
    }
  }
}

module.exports = { InsertFilmListFavoriteController };
