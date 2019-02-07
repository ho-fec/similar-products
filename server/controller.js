const SimilarList = require('../database/index.js');

const getSimilar = (req, res) => {
  // find should filter by category name, and return a max of 15 items
  SimilarList.find({})
    .limit(15)
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}

module.exports = {
  getSimilar
}