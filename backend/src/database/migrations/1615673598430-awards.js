const { Table } = require("typeorm");

module.exports = class awards1615673598430 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "awards",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "date_awards",
            type: "date",
            isNullable: false,
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("awards");
  }
};
