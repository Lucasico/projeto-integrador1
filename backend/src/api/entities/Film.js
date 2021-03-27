const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Film",
  tableName: "films",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    indicate_classifications_id: {
      type: "int",
      isNullable: false,
    },
    genre_id: {
      type: "int",
      isNullable: false,
    },
    images_id: {
      type: "int",
      isNullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    date_release: {
      type: "date",
      isNullable: false,
    },
    synopsis: {
      type: "varchar",
      isNullable: false,
    },
    duration: {
      type: "numeric",
      isNullable: false,
    },
  },
  relations: {
    indicate_classification: {
      target: "Indicate_classification",
      type: "one-to-one",
      cascade: true,
      joinColumn: {
        name: "indicate_classifications_id",
        referencedColumnName: "id",
      },
    },
    genre: {
      target: "Genre",
      type: "many-to-one",
      cascade: true,
      joinColumn: {
        name: "genre_id",
        referencedColumnName: "id",
      },
    },
    image: {
      target: "Image",
      type: "one-to-one",
      cascade: true,
      joinColumn: {
        name: "images_id",
        referencedColumnName: "id",
      },
    },
  },
});
