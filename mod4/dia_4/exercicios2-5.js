let numbers = [2, 3, 2, 5, 8, 2, 3];

function numberCount(array) {
  mostRepeated = 0;
  highestCounter = 0;
  for (index = 0; index < array.length; index += 1) {
    number = array[index]
    numberCounter = 0;
    for (innerIndex = index; innerIndex < array.length; innerIndex += 1) {
      if (number === array[innerIndex]) {
        numberCounter += 1;
        if (numberCounter > highestCounter) {
          highestCounter = numberCounter;
          mostRepeated = number;
        }
      }
    }
  }
  return mostRepeated;
}

console.log("O numero mais repetido é: " + numberCount(numbers));