let numbers = [2, 4, 6, 7, 10, 0, -3];

function lowestNumber(array) {
  let lowestIndex = 0;
  let lowestNumber = array[0];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowestNumber) {
      lowestIndex = index;
    }
  }

  return lowestIndex;
}

console.log(lowestNumber(numbers));