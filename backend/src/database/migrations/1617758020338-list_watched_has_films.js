const { Table } = require("typeorm");

module.exports = class listWatchedHasFilms1617758020338 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "list_watched_has_films",
        columns: [
          {
            name: "list_watched_films_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "film_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "dateInsertion",
            type: "timestamp with time zone",
            default: "timezone ('utc' :: text, now ())",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["list_watched_films_id"],
            referencedTableName: "list_watched_films",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["film_id"],
            referencedTableName: "films",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
    await queryRunner.query(
      'ALTER TABLE "list_watched_has_films" ADD CONSTRAINT cpk_list_watched_has_films PRIMARY KEY (list_watched_films_id, film_id)'
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("list_watched_has_films");
  }
};
