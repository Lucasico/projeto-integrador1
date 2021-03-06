const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Client",
  tableName: "clients",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    name: {
      type: "varchar",
    },
    cnpj: {
      type: "varchar",
      nullable: true,
    },
    max_number_users: {
      type: "int",
    },
  },
});
