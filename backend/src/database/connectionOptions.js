const config = require("config");

const Client = require("../api/entities/Client");

const connectionOptions = {
  type: "postgres",
  synchronize: false,
  host: config.get("postgres.host"),
  port: config.get("postgres.port"),
  username: config.get("postgres.username"),
  password: config.get("postgres.password"),
  database: config.get("postgres.database"),
  entities: [Client],
  migrations: ["src/database/migrations/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

module.exports = connectionOptions;
