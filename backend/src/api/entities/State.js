const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "State",
  tableName: "states",
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
