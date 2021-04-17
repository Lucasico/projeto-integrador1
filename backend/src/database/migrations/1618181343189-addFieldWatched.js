const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class addFieldWatched1618181343189 {
  async up(queryRunner) {
    //ALTER TABLE Customers ADD Email varchar(255);
    await queryRunner.query("ALTER TABLE favorite_list ADD watched boolean");
  }

  async down(queryRunner) {
    await queryRunner.query("ALTER TABLE favorite_list DROP COLUMN watched");
  }
};
