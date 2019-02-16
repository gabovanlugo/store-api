const fastify = require('fastify')({
  logger: true,
});

const mongoose = require('mongoose');

// Swagger options
const swagger = require('./config/swagger');
fastify.register(require('fastify-swagger'), swagger.options);

const routes = require('./routes');

// Connect to DB
mongoose.connect('mongodb://localhost/mystore')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

routes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`Server on: ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
