const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/compress'), { global: true });

// Register plugins
fastify.register(require('./plugins/db'));

// Register routes
fastify.register(require('./routes'));
fastify.register(require('./routes/users'));

module.exports = fastify;
