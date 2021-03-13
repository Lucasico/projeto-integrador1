const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Genre",
  tableName: "genres",
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
