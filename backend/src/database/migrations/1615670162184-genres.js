const { Table } = require("typeorm");

module.exports = class genres1615670162184 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "genres",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("genres");
  }
};
