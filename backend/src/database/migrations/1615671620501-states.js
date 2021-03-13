const { Table } = require("typeorm");

module.exports = class states1615671620501 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "states",
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
    await queryRunner.dropTable("states");
  }
};
