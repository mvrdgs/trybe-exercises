let n = "CMLXXXIV";
n = n.toLowerCase();
const i = 1;
const v = 5;
const x = 10;
const l = 50;
const c = 100;
const d = 500;
const m = 1000;

function convertRoman (romanNumber) {
  let numbers = [];
  for(index = 0; index < romanNumber.length; index += 1) {
    numbers.push(eval(romanNumber[index]));
  }
  let result = 0;
  for (index = numbers.length - 1; index >= 0; index -= 1) {
    if(numbers[index] <= result && numbers[index] !== numbers[index + 1]) {
      result -= numbers[index];
    } else {
      result += numbers[index];
    }
  }
  return result;
}

console.log(convertRoman(n));