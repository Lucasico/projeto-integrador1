const { getUserAutenticated } = require("../../utils/getUserAutenticated");

module.exports = function checkCustomer(req, res, next) {
  const user = getUserAutenticated(req);
  if (user) {
    console.log(user);
    return next();
  }
  return res.status(403).json({ content: "Invalid permission" });
};
