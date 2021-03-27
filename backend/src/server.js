const config = require("config");
const { app } = require("./app");

const PORT = config.get("port");

app.listen(PORT, () => {
  console.info(`Server running on ports ${PORT}`);
});
