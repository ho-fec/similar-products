const randomNumberDec = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumberArr = (len) => {
  return Array.from({length: len}, () => Number((Math.random() * 100).toFixed(2)));
}

module.exports = {
  randomNumberDec,
  randomNumberInt,
  randomNumberArr
};