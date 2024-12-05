const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options) {
  fastify.decorate('db', {
    users: [] // Mock database
  });
}

module.exports = fastifyPlugin(dbConnector);
