const clientRepository = require('../../../repositories/ClientRepository');
const { GetClientByIDUseCase } = require('./GetClientByIDUseCase');
const { GetClientByIDController } = require('../../../controllers/Client/GetClientByIDController');

const getClientByIDUseCase = new GetClientByIDUseCase({ clientRepository });
const getClientByIDController = new GetClientByIDController({ getClientByIDUseCase });

module.exports = { getClientByIDUseCase, getClientByIDController };
