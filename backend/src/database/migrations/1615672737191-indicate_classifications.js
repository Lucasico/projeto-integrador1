const { Table } = require("typeorm");

module.exports = class indicateClassifications1615672737191 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "indicate_classifications",
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
    await queryRunner.dropTable("indicate_classifications");
  }
};
