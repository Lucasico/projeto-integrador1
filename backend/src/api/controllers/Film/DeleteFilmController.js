class DeleteFilmController {
  constructor({ deleteFilmUseCase }) {
    this.deleteFilmUseCase = deleteFilmUseCase;
  }

  async handle(request, response) {
    try {
      const idString = request.params.id;
      const id = parseInt(idString);

      const res = await this.deleteFilmUseCase.execute({
        id,
      });

      if (res.statusCodeError === 400) {
        return response.status(400).json({
          status: "ERROR",
          content: res,
        });
      }

      return response.status(200).json({
        status: "OK",
        message: "Filme excluido com sucesso",
        content: res,
      });
    } catch (error) {
      console.log("Error ao excluido filme", error);

      return response.status(400).json({
        status: "ERROR",
        message: "Error ao excluido o filme",
      });
    }
  }
}

module.exports = { DeleteFilmController };
