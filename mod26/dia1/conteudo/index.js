const { question, questionInt } = require('readline-sync');

const name = question('Qual seu nome?');
const age = questionInt('Qual dua idade?');

console.log(`Olá, seu nome é ${name}! Você tem ${age} anos de idade`)
