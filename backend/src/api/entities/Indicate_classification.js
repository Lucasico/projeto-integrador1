const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Indicate_classification",
  tableName: "indicate_classifications",
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
    film: {
      target: "Film",
      inverseSide: "indicate_classification",
      type: "one-to-one",
    },
  },
});
