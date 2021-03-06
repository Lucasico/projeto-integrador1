const clientRepository = require('../../../repositories/ClientRepository');
const { UpdateClientUserCase } = require('./UpdateClientUseCase');
const { UpdateClienteController } = require('../../../controllers/Client/UpdateClientController');

const updateClientUseCase = new UpdateClientUserCase({ clientRepository });
const updateClientController = new UpdateClienteController({ updateClientUseCase });

module.exports = { updateClientUseCase, updateClientController };
