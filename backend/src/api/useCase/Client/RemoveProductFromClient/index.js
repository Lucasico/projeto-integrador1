const clientRepository = require('../../../repositories/ClientRepository');
const { RemoveProductFromClientUseCase } = require('./RemoveProductFromClientUseCase');
const { RemoveProductToClient } = require('../../../controllers/Client/RemoveProductFromClientController');

const removeProductToClientUseCase = new RemoveProductFromClientUseCase({ clientRepository });
const removeProdutToClientController = new RemoveProductToClient({ removeProductToClientUseCase });

module.exports = { removeProductToClientUseCase, removeProdutToClientController };
