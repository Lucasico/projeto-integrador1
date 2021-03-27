const { Table } = require("typeorm");

module.exports = class films1616691391355 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "films",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "indicate_classifications_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "genre_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "images_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "date_release",
            type: "date",
            isNullable: false,
          },
          {
            name: "synopsis",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "duration",
            type: "decimal(5,2)",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["indicate_classifications_id"],
            referencedTableName: "indicate_classifications",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            columnNames: ["genre_id"],
            referencedTableName: "genres",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            columnNames: ["images_id"],
            referencedTableName: "images",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("films");
  }
};
