const mongoose = require('mongoose');
const mock = require('../MOCK_DATA.js');

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

function insertURL(data) {
  data.forEach(obj => {
    for (let key in obj) {
      if (key === "image") {
        obj[key] = "https://picsum.photos/300/300/?random";
      }
    }
  });
}

const newMock = insertURL(mock);

console.log(newMock);

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
      .then(() => console.log('success'))
      .catch(err => console.log(err));
  })
}

save(newMock);

module.exports = SimilarList;