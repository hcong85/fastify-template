async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { message: 'Welcome to the Fastify API!' };
    });
  }
  
  module.exports = routes;
  