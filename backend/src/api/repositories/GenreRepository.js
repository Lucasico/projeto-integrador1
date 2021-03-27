const { getRepository } = require("typeorm");
const Genre = require("../entities/Genre");

module.exports = {
  async list() {
    const genreRepository = getRepository(Genre);
    const genreList = await genreRepository.find();
    return genreList;
  },
};
