let n = 5;

function sumProgression (number) {
  let sumResult = 0;
  for (index = 1; index <= number; index += 1) {
    sumResult += index;
  }

  return sumResult;
}

console.log(sumProgression(n));