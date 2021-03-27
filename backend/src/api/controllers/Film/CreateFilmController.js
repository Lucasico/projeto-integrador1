const {
  schemaCreateFilm,
  schemaCreateImageFilm,
} = require("./validation-schema");
const { toISOFormat } = require("../../../utils/toIsoDate");

const getValidationErros = require("../../../utils/getValidationErros");

class CreateFilmController {
  constructor({ createFilmUseCase }) {
    this.createFilmUseCase = createFilmUseCase;
  }

  async handle(request, response) {
    try {
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

      const dataToSubmit = { body: dataFormated, path: data.path };

      const res = await this.createFilmUseCase.execute({ dataToSubmit });

      return response.status(200).json({
        status: "OK",
        message: "Filme cadastrado com sucesso",
        content: res,
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
      console.log("error create film =>", error);
      return response.status(500).json({
        status: "ERROR",
        message: "Erro ao criar filme",
      });
    }
  }
}

module.exports = { CreateFilmController };
