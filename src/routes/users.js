const userController = require('../controllers/userController');

async function userRoutes(fastify, options) {
  fastify.get('/users', userController.getUsers);
  fastify.post('/users', userController.createUser);
}

module.exports = userRoutes;
