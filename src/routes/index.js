const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const routes = [
  ...userRoutes,
  ...productRoutes,
];

module.exports = routes;
