const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  brand: String,
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);
