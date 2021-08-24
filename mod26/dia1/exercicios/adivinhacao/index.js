const { questionInt, question } = require('readline-sync');

const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
};

let jogar = 'y';

while (jogar === 'y') {
  const guessedNumber = questionInt('Informe um número entre 1 e 10: ');
  const randomNumber = generateRandomNumber();

  if (guessedNumber === randomNumber) {
    console.log('Parabéns, você acertou!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  jogar = question('Gostaria de jogar novamente? (y/n): ')
}
