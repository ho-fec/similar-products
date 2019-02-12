const randomNumberDec = (min, max) => {
  return Math.random() * (max - min) + min;
}

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  randomNumberDec,
  randomNumberInt
};