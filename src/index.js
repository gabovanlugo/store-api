const fastify = require('fastify')({
  logger: true,
});

const mongoose = require('mongoose');

const routes = require('./routes');

// Connect to DB
mongoose.connect('mongodb://localhost/mystore')
  .then(() => console.log('MongoDB connected...'))
  .then(err => console.log(err));

fastify.get('/', async () => ({ hello: 'world' }));

routes.forEach((route) => {
  fastify.route(route);
});

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
