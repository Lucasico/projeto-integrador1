module.exports = {
  apps: [
    {
      name: "projeto-integrador",
      script: "./src/server.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
