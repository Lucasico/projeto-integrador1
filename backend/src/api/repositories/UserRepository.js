const { getRepository } = require("typeorm");
const { apiError } = require("../../utils/apiError");
const User = require("../entities/User");

module.exports = {
  async create(data) {
    const userRepository = getRepository(User);

    const userAlreadyExist = await userRepository.findOne({
      where: [{ email: data.email }],
    });

    if (userAlreadyExist) {
      return apiError(400, "Usuário deve ser único");
    } else {
      const newState = await userRepository.save(data);
      return newState;
    }
  },

  async findOneUserEmail(email) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      relations: ["type"],
      where: { email: email },
    });

    return user;
  },

  async showAllUsers({ page = 1, pageSize = 10, query }) {
    const userRepository = getRepository(User);
    const offset = (page - 1) * pageSize;
    const [usersList, quantity] = await userRepository
      .createQueryBuilder("users")
      .select(["users.id", "users.name", "users.telephone", "users.email"])
      .leftJoinAndSelect("users.type", "type")
      .leftJoinAndSelect("users.city", "city")
      .where("LOWER(users.name) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .orWhere("LOWER(users.email) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .orWhere("LOWER(users.telephone) like LOWER(:query)", {
        query: `%${query || ""}%`,
      })
      .take(pageSize)
      .skip(offset)
      .getManyAndCount();

    return { usersList, quantity, currentPage: page };
  },

  async findByIdUser(id) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      select: ["id", "name", "telephone", "email"],
      relations: ["type", "city"],
      where: { id: id },
    });

    return user;
  },

  async deleteUser({ id }) {
    const userRepository = getRepository(User);

    const userToBeExcluded = await userRepository.findOne(id);

    if (!userToBeExcluded) return apiError(400, "Usuário Não Encontrado");

    await userRepository.remove(userToBeExcluded);

    return userToBeExcluded;
  },

  async updateUser(id, newData) {
    const userRepository = getRepository(User);
    const userToBeUpdated = await userRepository.findOne(id);

    if (!userToBeUpdated) return apiError(400, "Usuário Não Encontrado");

    const uniqueUserEmail = await this.findOneUserEmail(newData.email);

    if (!uniqueUserEmail) {
      userToBeUpdated.type_id = newData.type_id;
      userToBeUpdated.city_id = newData.city_id;
      userToBeUpdated.name = newData.name;
      userToBeUpdated.email = newData.email;
      userToBeUpdated.telephone = newData.telephone;

      await userRepository.save(userToBeUpdated);

      return userToBeUpdated;
    }

    if (uniqueUserEmail.id === id) {
      userToBeUpdated.type_id = newData.type_id;
      userToBeUpdated.city_id = newData.city_id;
      userToBeUpdated.name = newData.name;
      userToBeUpdated.email = newData.email;
      userToBeUpdated.telephone = newData.telephone;

      await userRepository.save(userToBeUpdated);

      return userToBeUpdated;
    }
    return apiError(400, "Email deve ser unico");
  },
};
