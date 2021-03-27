const Yup = require("yup");
const { imageFilmRegex } = require("../../../utils/regexValidations");
const schemaCreateFilm = Yup.object().shape({
  genre_id: Yup.number().required("Tipo de usuario é um campo obrigatório"),
  indicate_classifications_id: Yup.number().required(
    "Cidade é um campo obrigatório"
  ),
  duration: Yup.number().required("duração em minutos é um campo obrigatório"),
  synopsis: Yup.string().required("Sinopse é um campo obrigatório"),
  date_release: Yup.string().required(
    "Data de lançamento é um campo obrigatório"
  ),

  name: Yup.string().required("Nome é um campo obrigatório"),
});

const schemaCreateImageFilm = Yup.object().shape({
  path: Yup.string().nullable(false).required("Imagem é um campo obrigatório"),
});

module.exports = { schemaCreateFilm, schemaCreateImageFilm };
