const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Type",
  tableName: "types",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    users: {
      target: "User",
      type: "one-to-many",
      inverseSide: "type",
      joinColumn: {
        name: "id",
        referencedColumnName: "type_id",
      },
    },
  },
});
