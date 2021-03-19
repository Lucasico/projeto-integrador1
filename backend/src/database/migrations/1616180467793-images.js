const { Table } = require("typeorm");

module.exports = class images1616180467793 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "Images",
        columns: [
          {
            name: "id",
            primary: true,
            type: "int",
            generated: "increment",
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
