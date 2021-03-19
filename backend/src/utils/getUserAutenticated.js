const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");

module.exports = {
  getUserAutenticated: (request) => {
    const { authorization } = request.headers;
    const { id, name, type } = jwt.verify(authorization, jwtKey);
    return { id, name, type };
  },
};
