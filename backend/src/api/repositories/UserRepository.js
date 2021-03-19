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

  async showAllUsers({ page = 1, pageSize = 10 }) {
    const userRepository = getRepository(User);

    const offset = (page - 1) * pageSize;

    const [usersList, quantity] = await userRepository.findAndCount({
      select: ["id", "name", "telephone", "telephone"],
      relations: ["type", "city"],
      order: {
        name: "ASC",
      },
      take: pageSize,
      skip: offset,
    });

    return { usersList, quantity, currentPage: page };
  },
};
