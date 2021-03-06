const { getRepository } = require("typeorm");
const Client = require("../entities/Client");

module.exports = {
  async list({ page = 1, pageSize = 10 }) {
    const clientRepository = getRepository(Client);

    const offset = (page - 1) * pageSize;

    const [clientsList, quantity] = await clientRepository.findAndCount({
      take: pageSize,
      skip: offset,
    });

    return { clientsList, quantity, currentPage: page };
  },

  async getById({ id }) {
    const clientRepository = getRepository(Client);
    const client = await clientRepository.findOne(id);
    return client;
  },

  async create(data) {
    const clientRepository = getRepository(Client);
    const client = await clientRepository.insert(data);

    return client.identifiers[0];
  },

  async update(id, newData) {
    const clientRepository = getRepository(Client);
    const clientToBeUpdated = await clientRepository.findOne(id);

    if (!clientToBeUpdated) {
      return null;
    }

    clientToBeUpdated.name = newData.name;
    clientToBeUpdated.cnpj = newData.cnpj;
    clientToBeUpdated.max_number_users = newData.maxNumberUsers;

    await clientRepository.save(clientToBeUpdated);

    return clientToBeUpdated;
  },

  async delete({ clientId }) {
    const clientRepository = getRepository(Client);
    const clientToDelete = await clientRepository.findOne(clientId);

    if (!clientToDelete) {
      return null;
    }

    await clientRepository.remove(clientToDelete);
    return clientToDelete;
  },
};
