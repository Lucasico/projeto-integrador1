const { Table } = require("typeorm");

module.exports = class city1615729603940 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "citys",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "state_id",
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
            columnNames: ["state_id"],
            referencedTableName: "states",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("citys");
  }
};
