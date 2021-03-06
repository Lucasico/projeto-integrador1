/* eslint-disable class-methods-use-this */
const { Table } = require('typeorm');

module.exports = class createClient1612880647697 {
  async up(queryRunner) {
    await queryRunner.createTable(new Table({
      name: 'clients',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isGenerated: true,
          generationStrategy: 'uuid',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'cnpj',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'max_number_users',
          type: 'int',
          isNullable: false,
          default: 0
        }
      ]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('clients');
  }
};
