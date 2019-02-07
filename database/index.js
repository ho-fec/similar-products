const mongoose = require('mongoose');
const mockData = require('../MOCK_DATA.js');

mongoose.connect('mongodb://localhost/similarlist');

const db = mongoose.connection;

db.on('error', err => console.log('CONNECTION ERROR: ', err));
db.once('open', () => console.log('Connected to the database.'));


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

const SimilarList = mongoose.model('Similarlist', similarSchema);

function insertURL(data) {
  data.forEach(obj => {
    obj.image = "https://picsum.photos/300/300/?random";
      });
  return data;
}

const newMock = insertURL(mockData);

// console.log(newMock);

function save(data) {
  data.forEach(entry => {
    entry = new SimilarList({
      product_name: entry.product_name,
      category: entry.category,
      size: entry.size,
      sku: entry.sku,
      description: entry.description,
      stars: entry.stars,
      reviews: entry.reviews,
      loves: entry.loves,
      exclusive: entry.exclusive,
      price: entry.price,
      image: entry.image
    }).save()
      .catch(err => console.log(err));
  })
}

save(mockData);