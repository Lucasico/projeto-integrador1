const { getRepository } = require("typeorm");
const Image = require("../entities/Image");
const config = require("config");
const PORT = config.get("port");
const pathUploads = config.get("pathUploads");
const pathUploadsFolder = config.get("pathUploadsFolder");

module.exports = {
  async saveImage(nameImage) {
    const PATH = `25.60.179.252`;
    const imageRepository = getRepository(Image);
    const submitData = {
      path: `http://${PATH}:${PORT}${pathUploadsFolder}/${nameImage}`,
    };
    const newImage = await imageRepository.save(submitData);
    return newImage;
  },
};
