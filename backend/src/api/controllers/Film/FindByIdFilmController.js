class FindByIdFilmController {
  constructor({ findByIdFilmUseCase }) {
    this.findByIdFilmUseCase = findByIdFilmUseCase;
  }

  async handle(request, response) {
    try {
      const idString = request.params.id;
      const id = parseInt(idString);
      console.log("id que vai pro useCase", id);
      const res = await this.findByIdFilmUseCase.execute({
        id,
      });

      return response.status(200).json({
        status: "OK",
        message: "Film recuperado com sucesso",
        content: res,
      });
    } catch (error) {
      console.log("Error ao recuperar Film", error);

      return response.status(400).json({
        status: "ERROR",
        message: "Error ao recuperar o Film",
      });
    }
  }
}

module.exports = { FindByIdFilmController };
