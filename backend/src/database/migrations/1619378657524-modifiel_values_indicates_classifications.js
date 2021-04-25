const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifielValuesIndicatesClassifications1619378657524 {
  async up(queryRunner) {
    //ALTER TABLE Customers ADD Email varchar(255);
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'L' where id = 1"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = '10' where id = 2"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = '12' where id = 3"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = '14' where id = 4"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = '16' where id = 5"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = '18' where id = 6"
    );
  }

  async down(queryRunner) {
    //ALTER TABLE Customers ADD Email varchar(255);
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Livre' where id = 1"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Não recomendado para menores de 10' where id = 2"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Não recomendado para menores de 12' where id = 3"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Não recomendado para menores de 14' where id = 4"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Não recomendado para menores de 16' where id = 5"
    );
    await queryRunner.query(
      "UPDATE indicate_classifications SET name = 'Não recomendado para menores de 18' where id = 6"
    );
  }
};
