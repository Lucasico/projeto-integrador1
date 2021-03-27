const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Image",
  tableName: "images",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    path: {
      type: "varchar",
      nullable: false,
    },
  },
  relations: {
    film: {
      target: "Film",
      inverseSide: "image",
      type: "one-to-one",
    },
  },
});
