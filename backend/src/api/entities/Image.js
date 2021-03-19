const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Image",
  tableName: "Images",
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
});
