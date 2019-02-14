const SimilarList = require('./index.js');
const mockData = require('../MOCK_DATA.js');
const { randomNumberDec, randomNumberInt, randomNumberArr } = require('./helpers.js');
const faker = require('faker');

function save(data) {
  data.forEach(entry => {
    entry = new SimilarList({
      product_name: entry.product_name,
      category: entry.category,
      size: randomNumberArr(randomNumberInt(1, 5)),
      description: entry.description,
      sku: randomNumberInt(1000000, 2000000),
      stars: randomNumberDec(0, 5),
      reviews: entry.reviews,
      badge: Math.random() >= 0.9,
      loves: entry.loves,
      exclusive: Math.random() >= 0.7,
      online_only: Math.random() >= 0.7,
      limited_edition: Math.random() >= 0.8,
      free_shipping: Math.random() >= 0.7,
      price: `$${randomNumberDec(1, 200)}`,
      image: faker.image.imageUrl(300,300,"animals")
    }).save()
      .catch(err => console.log(err));
  })
}

save(mockData);