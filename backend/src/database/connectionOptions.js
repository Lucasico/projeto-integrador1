const config = require("config");

// const Client = require("../api/entities/Client");
// const Genre = require("../api/entities/Genre");
// const State = require("../api/entities/State");
// const Indicate_classification = require("../api/entities/Indicate_classification");

const connectionOptions = {
  type: "postgres",
  synchronize: false,
  host: config.get("postgres.host"),
  port: config.get("postgres.port"),
  username: config.get("postgres.username"),
  password: config.get("postgres.password"),
  database: config.get("postgres.database"),
  entities: ["src/api/entities/*.js"],
  migrations: ["src/database/migrations/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

module.exports = connectionOptions;
