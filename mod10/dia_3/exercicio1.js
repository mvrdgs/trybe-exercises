function randomNumber() {
  return Math.ceil(Math.random() * 100);
};

function upperCase(string) {
  return string.toUpperCase();
}

module.exports = {
  randomNumber,
  upperCase,
};
