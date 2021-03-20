const { schemaUpdateUser } = require("./validation-schema");
const getValidationErros = require("../../../utils/getValidationErros");
class UpdateUserController {
  constructor({ updateUserUseCase }) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(request, response) {
    try {
      await schemaUpdateUser.validate(request.body, {
        abortEarly: false,
      });

      const idString = request.params.id;
      const id = parseInt(idString);

      const { type_id, city_id, name, email, telephone } = request.body;

      const userUpdate = await this.updateUserUseCase.execute(id, {
        type_id,
        city_id,
        name,
        email,
        telephone,
      });

      if (userUpdate.statusCodeError) {
        return response.status(userUpdate.statusCodeError).json({
          status: "ERROR",
          message: userUpdate.message,
        });
      }

      return response.status(200).json({
        status: "OK",
        message: "Dados atualizados com sucesso",
        userUpdate,
      });
    } catch (error) {
      const errors = getValidationErros(error);

      if (errors) {
        return response.status(400).json({
          status: "ERROR",
          message: "falha de validação",
          content: errors,
        });
      }

      console.log("erro atualizar usuario", error);

      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao atualizar cliente",
      });
    }
  }
}

module.exports = { UpdateUserController };
