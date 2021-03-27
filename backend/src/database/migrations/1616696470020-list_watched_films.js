const { Table } = require("typeorm");

module.exports = class listWatchedFilms1616696470020 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "list_watched_films",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
        ],
        foreignKeys: [
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
    await queryRunner.dropTable("list_watched_films");
  }
};
