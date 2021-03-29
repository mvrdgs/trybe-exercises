const randomNumber = () => Math.ceil(Math.random() * 5);
const raffle = (bet) => (randomNumber() === bet) ? 'Parabéns, você ganhou' : 'Tente novamente';

console.log(raffle(4));