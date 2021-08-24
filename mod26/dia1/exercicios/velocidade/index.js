const { questionFloat } = require('readline-sync');

const velocidade = (distancia, tempo) => {
  return (distancia / tempo);
};

const distancia = questionFloat('Qual a distância?');
const tempo = questionFloat('Qual o tempo?')

console.log(`A velocidade é: ${velocidade(distancia, tempo)}`);
