let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (let i = 1; i < numbers.length; i++){
  var multiplation = numbers[i] * numbers[i-1];
  numbersMultiplied[i-1] = multiplation;
}

for (let i = 0; i < numbersMultiplied.length; i++){
  console.log(numbersMultiplied[i]);
}