const clientRepository = require('../../../repositories/ClientRepository');
const { ListClientsUseCase } = require('./ListClientsUseCase');
const { ListClientsController } = require('../../../controllers/Client/ListClientsController');

const listClientsUseCase = new ListClientsUseCase({ clientRepository });
const listClientsController = new ListClientsController({ listClientsUseCase });

module.exports = { listClientsUseCase, listClientsController };
