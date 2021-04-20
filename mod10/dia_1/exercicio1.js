function sum(number1, number2) {
  return number1 + number2;
};

function myRemove([...arr], number) {
  return arr.filter((arrNumber) => arrNumber !== number)
};

function myRemoveWithoutCopy(arr, number) {
  if (arr.includes(number)) arr.splice(arr.indexOf(number), 1);
  return arr;
};

function fizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

module.exports = {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  fizzBuzz,
};
