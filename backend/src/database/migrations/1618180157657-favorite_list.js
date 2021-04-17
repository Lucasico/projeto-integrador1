const { Table } = require("typeorm");

module.exports = class favoriteList1618180157657 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "favorite_list",
        columns: [
          {
            name: "user_id",
            type: "int",
            isNullable: false,
            isPrimary: true,
          },
          {
            name: "film_id",
            type: "int",
            isNullable: false,
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["film_id"],
            referencedTableName: "films",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("favorite_list");
  }
};
