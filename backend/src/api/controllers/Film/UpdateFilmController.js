/*
    Sempre ao atualizar um filme, tenho que escolher uma nova
    imagem pra ele
*/

const {
  schemaCreateFilm,
  schemaCreateImageFilm,
} = require("./validation-schema");
const { toISOFormat } = require("../../../utils/toIsoDate");

const getValidationErros = require("../../../utils/getValidationErros");

class UpdateFilmController {
  constructor({ updateFilmUseCase }) {
    this.updateFilmUseCase = updateFilmUseCase;
  }

  async handle(request, response) {
    try {
      const idString = request.params.id;
      const id = parseInt(idString);
      const data = {
        body: request.body,
        path: request.file ? request.file.filename : "",
      };

      await schemaCreateFilm.validate(data.body, {
        abortEarly: false,
      });

      await schemaCreateImageFilm.validate(
        { path: data.path },
        {
          abortEarly: false,
        }
      );

      const dateFormated = new Date(`${toISOFormat(data.body.date_release)}`);

      const dataFormated = {
        indicate_classifications_id: Number(
          data.body.indicate_classifications_id
        ),
        genre_id: Number(data.body.genre_id),
        name: data.body.name,
        date_release: dateFormated,
        synopsis: data.body.synopsis,
        duration: Number(data.body.duration),
      };
      /**
       * pega o film no banco, expecifidamente sua imagem
       * vou excluo aquela imagem da pasta, quando excluir
       * ai continua.
       */
      const dataToSubmit = { body: dataFormated, path: data.path };

      const updateFilm = await this.updateFilmUseCase.execute(id, dataToSubmit);
      return response.status(200).json({
        status: "OK",
        message: "Filme atualizado com sucesso",
        content: updateFilm,
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
      console.log("erro atualizar filme", error);
      return response.status(400).json({
        status: "ERROR",
        message: "Erro ao atualizar filme",
      });
    }
  }
}

module.exports = { UpdateFilmController };
