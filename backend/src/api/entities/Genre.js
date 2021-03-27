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
      nullable: false,
    },
  },
  relations: {
    film: {
      target: "Film",
      type: "one-to-many",
      inverseSide: "genre",
      joinColumn: {
        name: "id",
        referencedColumnName: "genre_id",
      },
    },
  },
});
