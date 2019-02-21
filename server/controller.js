const SimilarList = require('../database/index.js');

const getSimilar = (req, res) => {
  let { id } = req.params;
  SimilarList
    .find({ id })
    .then(data => res.status(200).json(data[0].similar))
    .catch(err => console.log(err))
}

const getLike = (req, res) => {
  let { id } = req.params;
  SimilarList
    .find({ id })
    .then(data => res.status(200).json(data[0].similar))
    .catch(err => console.log(err))
}

// const getSimilar = (req, res) => {
//   SimilarList
//     .aggregate([{ $sample: { size:15 } }])
//     .then(data => res.status(200).json(data))
//     .catch(err => console.log(err))
// }

module.exports = {
  getSimilar,
  getLike
}