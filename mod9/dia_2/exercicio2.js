const promise = new Promise((resolve, reject) => {
  const tenRandomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    tenRandomNumbers.push(Math.ceil(Math.random() * 50));
  }
  tenRandomNumbers.sort((a, b) => a - b);
  const numbersToSquare = [];
  tenRandomNumbers.forEach((number) => numbersToSquare.push(number * number));
  const total = numbersToSquare.reduce((result, current) => result += current);
  console.log(total)
  
  if (total < 8000) return reject('Promise Rejeitada');
  resolve('Promise resolvida');
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));