const productController = require('../controllers/productController');

const productRoutes = [
  {
    method: 'GET',
    url: '/api/products',
    handler: productController.getProducts,
  },
  {
    method: 'GET',
    url: '/api/products/:id',
    handler: productController.getSingleProduct,
  },
  {
    method: 'POST',
    url: '/api/products',
    handler: productController.addProduct,
  },
  {
    method: 'PUT',
    url: '/api/products/:id',
    handler: productController.updateProduct,
  },
  {
    method: 'DELETE',
    url: '/api/products/:id',
    handler: productController.deleteProduct,
  },
];

module.exports = productRoutes;
