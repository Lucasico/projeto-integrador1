const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");

module.exports = {
  getUserAutenticated: (token) => {
    // const token = request.headers.authorization;
    const { id, name, type } = jwt.verify(token, jwtKey);
    return { id, name, type };
  },
};
