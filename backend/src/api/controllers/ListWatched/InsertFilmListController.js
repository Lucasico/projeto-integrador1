const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class InsertFilmListController {
  constructor({
    checkListAlreadyExistsUseCase,
    createNewListUseCase,
    insertFilmInTheListUseCase,
  }) {
    this.checkListAlreadyExistsUseCase = checkListAlreadyExistsUseCase;
    this.createNewListUseCase = createNewListUseCase;
    this.insertFilmInTheListUseCase = insertFilmInTheListUseCase;
  }

  async handle(request, response) {
    try {
      const { id, name } = getUserAutenticated(request);
      const { film_id } = request.body;
      let newAddFilList = null;

      const listByUser = await this.checkListAlreadyExistsUseCase.execute({
        id,
      });
      if (listByUser) {
        const dataInsertTheListExisting = {
          list_watched_films_id: listByUser.id,
          film_id,
        };
        newAddFilList = await this.insertFilmInTheListUseCase.execute(
          dataInsertTheListExisting
        );
      } else {
        const newList = await this.createNewListUseCase.execute({
          user_id: id,
          name: `Lista do usuario ${name}`,
        });
        const dataInsertInTheNewList = {
          list_watched_films_id: newList.id,
          film_id,
        };
        newAddFilList = await this.insertFilmInTheListUseCase.execute(
          dataInsertInTheNewList
        );
      }
      console.log("retorno", newAddFilList);
      if (newAddFilList) {
        //console.log("list =>", listByUser);
        return response.status(200).json({
          status: "ok",
          message: "Filme inserido na lista com sucesso",
          content: newAddFilList,
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

module.exports = { InsertFilmListController };
