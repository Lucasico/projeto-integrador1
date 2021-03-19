const { getUserAutenticated } = require("../../utils/getUserAutenticated");

module.exports = function isAdmin(req, res, next) {
  const user = getUserAutenticated(req);
  const { type } = user;
  //type.id === 1 isAdmin || type.id === 2 idCustomer
  if (type.id !== 1) {
    return res.status(403).json({ content: "Invalid permission" });
  }

  return next();
};
