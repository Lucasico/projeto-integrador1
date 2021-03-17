const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");

module.exports = function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      status: "UNAUTHORIZED",
      content: "Acesso negado, token não disponivel",
    });
  }
  try {
    const decoded = jwt.verify(token, jwtKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("error =>", error);
    res.status(400).json({
      status: "UNAUTHORIZED",
      content: "Invalid token",
    });
  }
};
