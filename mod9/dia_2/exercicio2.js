const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {

    const tenRandomNumbers = Array.from(
      { length: 10 },
      () => Math.ceil(Math.random() * 50),
    )

    const total = tenRandomNumbers.map((number) => number * number)
      .reduce((result, current) => result += current);

    total > 8000 ? reject('É mais de 8 mil! Essa promise deve estar quebrada') : resolve(total);
  });

  promise
    .then((result) => [2, 3, 5, 10].map((number) => result / number))
    .then((result) => console.log(result.reduce((result, current) => result += current)))
    .catch((error) => console.log(error));
}

fetchPromise();