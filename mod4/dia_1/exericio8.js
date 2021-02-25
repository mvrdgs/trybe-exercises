let numero1 = 2;
let numero2 = 4;
let numero3 = 6;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
  console.log("Ao menos um dos numeros é par");
} else {
  console.log("Nenhum dos numeros é par");
}

if (numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1) {
  console.log("Ao menos um dos numeros é ímpar");
} else {
  console.log("Nenhum dos numeros é ímpar");
}