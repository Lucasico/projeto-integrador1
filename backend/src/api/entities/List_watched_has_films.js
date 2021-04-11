const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "List_watched_has_films",
  tableName: "list_watched_has_films",
  columns: {
    list_watched_films_id: {
      type: "int",
      isNullable: false,
      primary: true,
    },
    film_id: {
      type: "int",
      isNullable: false,
      primary: true,
    },
    date_insertion: {
      type: "timestamp with time zone",
      primary: false,
    },
  },
  relations: {
    list_favority: {
      target: "List_watched_film",
      type: "many-to-one",
      cascade: true,
      eager: true,
      primary: true,
      joinColumn: {
        name: "list_watched_films_id",
        referencedColumnName: "id",
      },
    },
    films: {
      target: "Film",
      type: "many-to-one",
      cascade: true,
      eager: true,
      primary: true,
      joinColumn: {
        name: "film_id",
        referencedColumnName: "id",
      },
    },
  },
});
