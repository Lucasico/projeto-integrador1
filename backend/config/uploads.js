const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "uploads"),
    filename: (request, file, cb) => {
      const currentDate = Date.now();
      const fileName = `${currentDate}-${file.originalname
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")}`;
      cb(null, fileName);
    },
  }),
};
