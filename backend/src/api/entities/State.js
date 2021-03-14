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
  relations: {
    cities: {
      target: "City",
      type: "many-to-one",
      cascade: true,
      // eager: false,
      // primary: true,
      joinColumn: {
        name: "id",
        ReferencedColumnName: "state_id",
      },
    },
  },
});
