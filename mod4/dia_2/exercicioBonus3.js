let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (let i = 0; i < numbers.length; i++){
  if(i+1 < numbers.length){
    let multiplation = numbers[i] * numbers[i+1];
    numbersMultiplied.push(multiplation);
  } else {
    let multiplication = 2 * numbers[i];
    numbersMultiplied.push(multiplication);
  }
}

for (let i = 0; i < numbersMultiplied.length; i++){
  console.log(numbersMultiplied[i]);
}