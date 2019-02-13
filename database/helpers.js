const randomNumberDec = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  randomNumberDec,
  randomNumberInt
};