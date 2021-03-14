const { schemaCreateUser } = require("./validation-schema");
const getValidationErros = require("../../../utils/getValidationErros");
class CreateUserController {
  constructor({ createUserUseCase }) {
    this.createUserUseCase = createUserUseCase;
  }
  async handle(request, response) {
    try {
      const data = await schemaCreateUser.validate(request.body, {
        abortEarly: false,
      });
      const {
        type_id,
        city_id,
        name,
        email,
        password,
        telephone,
      } = request.body;
      const res = await this.createUserUseCase.execute({
        type_id,
        city_id,
        name,
        email,
        password,
        telephone,
      });

      if (res.statusCodeError) {
        return response.status(res.statusCodeError).json({
          status: "ERROR",
          message: res.message,
        });
      }
      return response.status(201).json({
        status: "OK",
        message: "Usuario cadastrado com sucesso",
        content: { name, email },
      });
    } catch (error) {
      console.log("error", error);
      const errors = getValidationErros(error);
      if (errors) {
        return response.status(400).json({
          status: "ERROR",
          message: "falha de validação",
          content: errors,
        });
      }
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao criar usuario",
      });
    }
  }
}

module.exports = { CreateUserController };
