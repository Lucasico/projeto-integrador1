const clientRepository = require('../../../repositories/ClientRepository');
const { CreateClientUseCase } = require('./CreateUserUseCase');
const { CreateClientController } = require('../../../controllers/Client/CreateClientController');

const createClientUseCase = new CreateClientUseCase({ clientRepository });
const createClientController = new CreateClientController({ createClientUseCase });

module.exports = { createClientUseCase, createClientController };
