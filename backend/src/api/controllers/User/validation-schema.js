const Yup = require("yup");
const { telephoneRegex } = require("../../../utils/regexValidations");

const schemaCreateUser = Yup.object().shape({
  type_id: Yup.number().required("Tipo de usuario é um campo obrigatório"),
  city_id: Yup.number().required("Cidade é um campo obrigatório"),
  name: Yup.string().required("Nome é um campo obrigatório"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Email é um campo obrigatório"),
  password: Yup.string()
    .required("Senha é um campo obrigatório")
    .min(5)
    .max(15),
  telephone: Yup.string().matches(
    telephoneRegex,
    "Formato de telefone inválido"
  ),
});

const schemaUpdateUser = Yup.object().shape({
  type_id: Yup.number().required("Tipo de usuario é um campo obrigatório"),
  city_id: Yup.number().required("Cidade é um campo obrigatório"),
  name: Yup.string().required("Nome é um campo obrigatório"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Email é um campo obrigatório"),
  telephone: Yup.string().matches(
    telephoneRegex,
    "Formato de telefone inválido"
  ),
});

module.exports = { schemaCreateUser, schemaUpdateUser };
