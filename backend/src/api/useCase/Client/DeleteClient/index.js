const clientRepository = require('../../../repositories/ClientRepository');
const { DeleteClientUseCase } = require('./DeleteClientUseCase');
const { DeleteClientController } = require('../../../controllers/Client/DeleteClientController');

const deleteClientUseCase = new DeleteClientUseCase({ clientRepository });
const deleteClientController = new DeleteClientController({ deleteClientUseCase });

module.exports = { deleteClientUseCase, deleteClientController };
