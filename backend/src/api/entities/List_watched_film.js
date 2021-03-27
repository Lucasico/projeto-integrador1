const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "List_watched_film",
  tableName: "list_watched_films",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    user_id: {
      type: "int",
      nullable: false,
    },
  },
  relations: {
    user: {
      target: "User",
      type: "one-to-one",
      cascade: true,
      joinColumn: {
        name: "user_id",
        referencedColumnName: "id",
      },
    },
  },
});
