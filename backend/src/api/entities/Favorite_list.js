const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Favorite_list",
  tableName: "favorite_list",
  columns: {
    film_id: {
      type: "int",
      isNullable: false,
      primary: true,
    },
    user_id: {
      type: "int",
      isNullable: false,
      primary: true,
    },
    watched: {
      type: "boolean",
      isNullable: false,
    },
  },
  relations: {
    owner: {
      target: "User",
      type: "many-to-one",
      cascade: true,
      eager: true,
      primary: true,
      joinColumn: {
        name: "user_id",
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
