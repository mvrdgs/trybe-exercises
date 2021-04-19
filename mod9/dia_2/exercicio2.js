function sumNumbers() {
  const tenRandomNumbers = Array.from(
    { length: 10 },
    () => Math.ceil(Math.random() * 50),
  )

  const total = tenRandomNumbers.map((number) => number * number)
    .reduce((result, current) => result += current);
  
  if (total >= 8000) {
    throw new Error();
  }

  return total;
}

function divideAndSumNumbers(result) {
  return [2, 3, 5, 10].map((number) => result / number)
    .reduce((result, current) => result += current);
}

const fetchPromise = async () => {
  try {
    const total = await sumNumbers();
    const result = await divideAndSumNumbers(total);
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

fetchPromise();
