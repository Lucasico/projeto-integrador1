const { Table } = require("typeorm");

module.exports = class images1616180467793 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
            nullable: false,
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("Images");
  }
};
