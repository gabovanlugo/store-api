const boom = require('boom');

const Product = require('../models/Product');

// Get all products
exports.getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single product by ID
exports.getSingleProduct = async (req) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new product
exports.addProduct = async (req) => {
  const { body } = req;
  try {
    const product = new Product(body);
    return product.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing product
exports.updateProduct = async (req) => {
  try {
    const { body: updateData } = req;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
    return product;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a product
exports.deleteProduct = async (req) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndRemove(id);
    return product;
  } catch (err) {
    throw boom.boomify(err);
  }
};
