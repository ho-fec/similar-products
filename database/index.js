const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/similarlist', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', err => console.log('CONNECTION ERROR: ', err));
db.once('open', () => console.log('Connected to the database.'));


const similarSchema = new mongoose.Schema({
  product_name: String,
  category: String,
  size: String,
  description: String,
  sku: Number,
  stars: Number,
  reviews: Number,
  badge: Boolean,
  loves: Number,
  exclusive: Boolean,
  price: String,
  image: String
});

const SimilarList = mongoose.model('Similarlist', similarSchema);

module.exports = SimilarList;