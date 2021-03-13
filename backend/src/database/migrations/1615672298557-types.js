const { Table } = require("typeorm");

module.exports = class types1615672298557 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "types",
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
    await queryRunner.dropTable("types");
  }
};
