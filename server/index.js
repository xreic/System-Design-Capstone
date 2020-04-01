// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => reply.send({ hello: 'world' }));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(
      `Kansei dorifto on port: ${fastify.server.address().port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
