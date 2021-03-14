const { Table } = require("typeorm");

module.exports = class users1615746941546 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "type_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "city_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telephone",
            type: "varchar",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["type_id"],
            referencedTableName: "types",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["city_id"],
            referencedTableName: "citys",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }
};
