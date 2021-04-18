const { getUserAutenticated } = require("../../../utils/getUserAutenticated");

class ShowLoggedUserProfileController {
  constructor({
    findByIdUserUseCase,
    totalMinutesWatchedUseCase,
    totalFilmsByGenreUseCase,
  }) {
    this.findByIdUserUseCase = findByIdUserUseCase;
    this.totalMinutesWatchedUseCase = totalMinutesWatchedUseCase;
    this.totalFilmsByGenreUseCase = totalFilmsByGenreUseCase;
  }
  async handle(request, response) {
    try {
      const { id, name } = getUserAutenticated(request);
      let responseData = {};
      const user = await this.findByIdUserUseCase.execute({
        id,
      });
      const totalMinutesWatched = await this.totalMinutesWatchedUseCase.execute(
        { id }
      );
      const totalFilmsByGenre = await this.totalFilmsByGenreUseCase.execute({
        id,
      });

      responseData = {
        user,
        totalMinutesWatched,
        totalFilmsByGenre,
      };
      return response.status(200).json({
        status: "OK",
        message: "Usuario recuperado com sucesso",
        content: responseData,
      });
    } catch (error) {
      console.log("Error ao recuperar usuario", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Error ao recuperar dados do usuario o usuário",
      });
    }
  }
}

module.exports = { ShowLoggedUserProfileController };
