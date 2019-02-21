const SimilarList = require('./index.js');
const mockData = require('../MOCK_DATA.js');
const { randomNumberDec, randomNumberInt, randomNumberArr } = require('./helpers.js');
const faker = require('faker');

// use mockaroo base data to create another json object
// use that object as the input to the generatelist func
// generalist creates 100 objects with an id and an array
// push 15 items from json into array from general object
// save generalist to object

const newData = (data) => {
  result = [];
  data.forEach(entry => {
    result.push({
      product_name: entry.product_name,
      category: entry.category,
      size: randomNumberArr(randomNumberInt(1, 5)),
      description: entry.description,
      sku: randomNumberInt(1000000, 2000000),
      stars: randomNumberDec(0, 5),
      reviews: randomNumberInt(0, 1000),
      badge: Math.random() >= 0.9,
      loves: randomNumberInt(0, 200000),
      exclusive: Math.random() >= 0.7,
      online_only: Math.random() >= 0.7,
      limited_edition: Math.random() >= 0.8,
      free_shipping: Math.random() >= 0.7,
      price: `$${randomNumberDec(1, 200)}`,
      image: faker.image.imageUrl(300,300,"animals")
    });
  })
  return result;
}

const testData = newData(mockData);

const mainList = (data) => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let newObj = { id: i, similar: [] };

    for (let i = 0; i < 15; i++) {
      let getData = data[randomNumberInt(0, 1500)];
      newObj.similar.push(getData);
    }
    result.push(newObj);
  }
  return result;
}

const saveMain = (data) => {
  data.forEach(entry => {
    entry = new SimilarList({
      id: entry.id,
      similar: entry.similar
    })
    .save()
    .catch(err => console.log(err));
  })
}

saveMain(mainList(testData));

// function save(data) {
//   data.forEach(entry => {
//     entry = new SimilarList({
//       product_name: entry.product_name,
//       category: entry.category,
//       size: randomNumberArr(randomNumberInt(1, 5)),
//       description: entry.description,
//       sku: randomNumberInt(1000000, 2000000),
//       stars: randomNumberDec(0, 5),
//       reviews: entry.reviews,
//       badge: Math.random() >= 0.9,
//       loves: entry.loves,
//       exclusive: Math.random() >= 0.7,
//       online_only: Math.random() >= 0.7,
//       limited_edition: Math.random() >= 0.8,
//       free_shipping: Math.random() >= 0.7,
//       price: `$${randomNumberDec(1, 200)}`,
//       image: faker.image.imageUrl(300,300,"animals")
//     }).save()
//       .catch(err => console.log(err));
//   })
// }

// save(newMock);