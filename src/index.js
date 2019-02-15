const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', async () => ({ hello: 'world' }));

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server on: ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
