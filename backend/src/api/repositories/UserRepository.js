const { getRepository } = require("typeorm");
const { apiError } = require("../../utils/apiError");
const User = require("../entities/User");

module.exports = {
  async create(data) {
    const userRepository = getRepository(User);
    const userAlreadyExist = await userRepository.findOne({
      where: [{ name: data.name }, { email: data.email }],
    });
    if (userAlreadyExist) {
      return apiError(400, "Usuário deve ser único");
    } else {
      const newState = await userRepository.save(data);
      return newState;
    }
  },
  //userRepository.find({ select: ["firstName", "lastName"] });
  async findOneUserEmail(email) {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      relations: ["type"],
      where: { email: email },
    });
    return user;
  },
};
