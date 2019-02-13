const SimilarList = require('./index.js');
const mockData = require('../MOCK_DATA.js');
const { randomNumberDec, randomNumberInt } = require('./helpers.js');
const faker = require('faker');

function save(data) {
  data.forEach(entry => {
    entry = new SimilarList({
      product_name: entry.product_name,
      category: entry.category,
      size: entry.size,
      description: entry.description,
      sku: randomNumberInt(1000000, 2000000),
      stars: randomNumberDec(0, 5),
      reviews: entry.reviews,
      badge: Math.random() >= 0.9,
      loves: entry.loves,
      exclusive: entry.exclusive,
      price: entry.price,
      image: faker.image.fashion()
    }).save()
      .catch(err => console.log(err));
  })
}

save(mockData);