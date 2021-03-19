class ShowAllUsersController {
  constructor({ showAllUsersUseCase }) {
    this.showAllUsersUseCase = showAllUsersUseCase;
  }

  async handle(request, response) {
    try {
      const { page = 1, pageSize = 10 } = request.headers;

      const usersList = await this.showAllUsersUseCase.execute({
        page: Number(page),
        pageSize: Number(pageSize),
      });

      return response.status(200).json({
        status: "OK",
        message: "Lista de usuarios recuperada com sucesso",
        content: usersList,
      });
    } catch (error) {
      console.log("error ao listar usuarios", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao buscar usuarios",
      });
    }
  }
}
module.exports = { ShowAllUsersController };
