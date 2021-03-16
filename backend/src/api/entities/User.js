const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    type_id: {
      type: "int",
      nullable: false,
    },
    city_id: {
      type: "int",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    email: {
      type: "varchar",
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    telephone: {
      type: "varchar",
      nullable: true,
    },
  },
  relations: {
    type: {
      target: "Type",
      type: "many-to-one",
      cascade: true,
      //   eager: true,
      // primary: false,
      joinColumn: {
        name: "type_id",
        referencedColumnName: "id",
      },
    },
    city: {
      target: "City",
      type: "many-to-one",
      cascade: true,
      // eager: true,
      // primary: true,
      joinColumn: {
        name: "city_id",
        referencedColumnName: "id",
      },
    },
  },
});
