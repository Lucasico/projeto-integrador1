const fs = require("fs");
const path = require("path");
const { apiError } = require("./apiError");
const deleteFile = async (fileName) => {
  const directory = path.join(__dirname, "..", "..", "uploads");
  const filePath = `${directory}/${fileName.split("/uploads/").pop()}`;
  fs.unlink(filePath, (err) => {
    if (err) {
      return apiError(404, "Imagem antiga não encontrada");
    }
  });

  return true;
};

module.exports = { deleteFile };
