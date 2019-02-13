const mongoose = require('mongoose');
const mockData = require('../MOCK_DATA.js');
const { randomNumberDec, randomNumberInt } = require('./helpers.js');
const faker = require('faker');

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

// Uncomment to populate DB with dummy data

// function insertURL(data) {
//   data.forEach(obj => {
//     obj.image = "https://picsum.photos/300/300/?random";
//       });
//   return data;
// }

// const newMock = insertURL(mockData);

// function save(data) {
//   data.forEach(entry => {
//     entry = new SimilarList({
//       product_name: entry.product_name,
//       category: entry.category,
//       size: entry.size,
//       description: entry.description,
//       sku: randomNumberInt(1000000, 2000000),
//       stars: randomNumberDec(0, 5),
//       reviews: entry.reviews,
//       badge: Math.random() >= 0.9,
//       loves: entry.loves,
//       exclusive: entry.exclusive,
//       price: entry.price,
//       image: faker.image.fashion()
//     }).save()
//       .catch(err => console.log(err));
//   })
// }

// save(mockData);