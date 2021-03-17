const { Table } = require("typeorm");

module.exports = class listFavorites1615939925808 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "list_favorites",
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
    await queryRunner.dropTable("list_favorites");
  }
};
