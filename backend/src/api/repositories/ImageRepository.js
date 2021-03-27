const { getRepository } = require("typeorm");
const Image = require("../entities/Image");
const config = require("config");
const PORT = config.get("port");
const pathUploads = config.get("pathUploads");
const pathUploadsFolder = config.get("pathUploadsFolder");

module.exports = {
  async saveImage(nameImage) {
    const imageRepository = getRepository(Image);
    const submitData = {
      path: `http://${pathUploads}:${PORT}${pathUploadsFolder}/${nameImage}`,
    };
    const newImage = await imageRepository.save(submitData);
    return newImage;
  },
};
