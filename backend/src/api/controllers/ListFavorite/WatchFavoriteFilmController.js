/**
 * pega o id do filme
 * modificar para assistindo
 * inserir na lista de assistidos, caso não tenha a lista criada, necessario cria-la e inserir
 */
const { getUserAutenticated } = require("../../../utils/getUserAutenticated");
class WatchFavoriteFilmController {
  constructor({
    modifyToWatchedTheMovieUseCase,
    checkListAlreadyExistsUseCase,
    createNewListUseCase,
    insertFilmInTheListUseCase,
  }) {
    this.modifyToWatchedTheMovieUseCase = modifyToWatchedTheMovieUseCase;
    this.checkListAlreadyExistsUseCase = checkListAlreadyExistsUseCase;
    this.createNewListUseCase = createNewListUseCase;
    this.insertFilmInTheListUseCase = insertFilmInTheListUseCase;
  }
  async handle(request, response) {
    try {
      const { id, name } = getUserAutenticated(request);
      const { film_id } = request.body;
      let newAddFilList = null;
      const dataToSubmit = {
        watched: true,
      };

      //primeiro alterar o watched para true;
      const filmToWatched = await this.modifyToWatchedTheMovieUseCase.execute(
        id,
        film_id,
        dataToSubmit
      );
      if (filmToWatched.statusCodeError === 400) {
        return response.status(200).json({
          status: "ok",
          message: "Erro ao modificar filme para assistido",
        });
      } else {
        /**
         * 1 - verificar se a lista de assistidos desse usuario existe
         * 2 - caso exista no inserir
         * 3 - caso não exista cria e inseri
         */
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
            name: `Lista de filmes assistidos do usuario ${name}`,
          });
          const dataInsertInTheNewList = {
            list_watched_films_id: newList.id,
            film_id,
          };
          newAddFilList = await this.insertFilmInTheListUseCase.execute(
            dataInsertInTheNewList
          );
        }
        return response.status(200).json({
          status: "ok",
          message: "Filme modificado para assistido com sucesso!",
          contente: filmToWatched,
        });
      }
    } catch (error) {
      console.error("Erro ao modificar film =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao modificar filme para assistido",
      });
    }
  }
}
module.exports = { WatchFavoriteFilmController };
