class FindByIdUserController {
  constructor({ findByIdUserUseCase }) {
    this.findByIdUserUseCase = findByIdUserUseCase;
  }

  async handle(request, response) {
    try {
      const idString = request.params.id;
      const id = parseInt(idString);
      const res = await this.findByIdUserUseCase.execute({
        id,
      });

      return response.status(200).json({
        status: "OK",
        message: "Usuario recuperado com sucesso",
        content: res,
      });
    } catch (error) {
      console.log("Error ao recuperar usuario", error);

      return response.status(400).json({
        status: "ERROR",
        message: "Error ao recuperar o usuário",
      });
    }
  }
}

module.exports = { FindByIdUserController };
