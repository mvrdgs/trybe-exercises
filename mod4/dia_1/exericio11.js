let salarioBruto = 1500;
let salarioLiquido = salarioBruto;

if (salarioBruto <= 1556.94) {
  salarioLiquido *= .92;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
  salarioLiquido *= .91;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioLiquido *= .89;
} else {
  salarioLiquido -= 570.88;
}

if (salarioLiquido <= 1903.98) {
  salarioLiquido -= 0;
} else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
  salarioLiquido -= ((salarioLiquido * .075) - 142.80);
} else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
  salarioLiquido -= ((salarioLiquido * .15) - 354.80);
} else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
  salarioLiquido -= ((salarioLiquido * .225) - 636.13);
} else {
  salarioLiquido -= ((salarioLiquido * .275) - 869.36);
}

console.log("O salário líquido é: " + salarioLiquido)