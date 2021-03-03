let numbers = [2, 3, 6, 7, 10, 1];

function highestNumber(array) {
  let highestIndex = 0;
  let highestNumber = array[0];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestIndex = index;
    }
  }

  return highestIndex;
}

console.log(highestNumber(numbers));