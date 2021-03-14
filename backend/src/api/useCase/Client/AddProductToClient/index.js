const clientRepository = require('../../../repositories/ClientRepository');
const { AddProdutToClientUseCase } = require('./AddProductToClientUseCase');
const { AddProductToClient } = require('../../../controllers/Client/AddProductToClientController');

const addProductToClientUseCase = new AddProdutToClientUseCase({ clientRepository });
const addProdutToClientController = new AddProductToClient({ addProductToClientUseCase });

module.exports = { addProductToClientUseCase, addProdutToClientController };
