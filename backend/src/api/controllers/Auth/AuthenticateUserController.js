const { apiError } = require("../../../utils/apiError");
const config = require("config");
const bcrypt = require("bcrypt");
const jwtKey = config.get("jwtSecret");
const jwt = require("jsonwebtoken");

class AuthenticateUserController {
  constructor({ findUserEmailUseCase }) {
    this.findUserEmailUseCase = findUserEmailUseCase;
  }

  async handle(request, response) {
    try {
      const { email, password } = request.body;
      const user = await this.findUserEmailUseCase.execute(email);

      if (!user) {
        return apiError(401, "Email ou Senha Inválido");
      } else {
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return apiError(401, "Email ou Senha Inválido");
        const token = jwt.sign(
          { id: user.id, name: user.name, type: { ...user.type } },
          jwtKey,
          {
            expiresIn: "24h",
          }
        );
        return response.status(200).json({
          status: "OK",
          token,
          content: {
            id: user.id,
            name: user.name,
            email: user.email,
            type: { ...user.type },
          },
        });
      }
    } catch (error) {
      console.log("error =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao autenticar o usuario",
      });
    }
  }
}
module.exports = { AuthenticateUserController };
