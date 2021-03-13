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
});
