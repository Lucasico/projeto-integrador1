const { EntitySchema } = require("typeorm");
module.exports = new EntitySchema({
  name: "Award",
  tableName: "awards",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    date_awards: {
      type: "date",
    },
  },
});
