const mongoose = require('mongoose');

const similarSchema = new mongoose.Schema({
  product_name: String,
  category: String,
  size: String,
  sku: Number,
  description: String,
  stars: Number,
  reviews: Number,
  loves: Number,
  exclusive: Boolean,
  price: String,
  image: String
});

const SimilarList = mongoose.model('similarlist', similarSchema);

module.exports = SimilarList;