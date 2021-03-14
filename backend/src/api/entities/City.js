const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "City",
  tableName: "citys",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    state_id: {
      type: "int",
      nullable: false,
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    state: {
      target: "State",
      type: "one-to-many",
      cascade: true,
      eager: true,
      primary: true,
      joinColumn: {
        name: "state_id",
        ReferencedColumnName: "id",
      },
    },
    users: {
      target: "User",
      type: "one-to-many",
      inverseSide: "city",
      joinColumn: {
        name: "id",
        referencedColumnName: "city_id",
      },
    },
  },
});
