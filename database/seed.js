const { SimilarList, LikeList } = require('./index.js');
const mockData = require('../MOCK_DATA.js');
const { randomNumberDec, randomNumberInt, randomNumberArr, generateSimilarList, generateLikeList } = require('./helpers.js');

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
      image: `https://picsum.photos/300/300/?image=${Math.floor(Math.random() * 1000) + 1}`
    });
  })
  return result;
}

const testData = newData(mockData);

const saveSimilar = (data) => {
  data.forEach(entry => {
    entry = new SimilarList({
      id: entry.id,
      similar: entry.similar
    })
    .save()
    .catch(err => console.log(err));
  })
}

const saveLike = (data) => {
  data.forEach(entry => {
    entry = new LikeList({
      id: entry.id,
      like: entry.like
    })
    .save()
    .catch(err => console.log(err));
  })
}

saveSimilar(generateSimilarList(testData));
saveLike(generateLikeList(testData));

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