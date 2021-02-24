let a = 10;
let b = 7;
let c = 14;

let angulo1 = 120;
let angulo2 = 40;
let angulo3 = 20;
let ehTriangulo;

//soma
console.log("a soma é " + (a + b));

//subtração
console.log("a subtração é é " + (a - b));

//multiplicação
console.log("a multiplicação é " + (a * b));

//divisão
console.log("a divisão é " + (a / b));

//módulo
console.log("o módulo é " + (a % b));

//maior de 2 numeros
if (a > b) {
  console.log(a + " é maior que " + b);
}
else if (a < b) {
  console.log(b + " é maior que " + a);
}
else {
  console.log(a + " é igual a " + b);
}

//maior de 3 numeros
if (a > b && a > c) {
  console.log(a + " é maior que " + b + " e " + c);
}
else if (b > a && b > c) {
  console.log(b + " é maior que " + a + " e " + c);
}
else if (c > a && c > b) {
  console.log(c + " é maior que " + a + " e " + b);
}
else {
  console.log("Existem numeros com o mesmo valor");
}

//verificando se é positivo ou negativo
if (a > 0) {
  console.log(a + " é um número positivo");
}
else if (a < 0) {
  console.log(a + " é um número negativo");
}
else {
  console.log ("O número é " + a);
}

//verificando se é um triângulo
if ((angulo1 + angulo2 + angulo3) == 180) {
  ehTriangulo = true;
  console.log("Temos um triângulo? " + ehTriangulo)
}
else{
  console.log("Os parâmetros especificados não compõe um triângulo")
}