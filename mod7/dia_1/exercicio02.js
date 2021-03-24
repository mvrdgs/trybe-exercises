const fatorial = (numero) => numero <= 1 ? 1 : numero * fatorial (numero - 1);

console.log(fatorial(5));

const fatorialCompleto = (numero) => {
  if (numero <= 1) {
    return 1;
  } else {
    return numero * fatorialCompleto (numero - 1)
  }
}

console.log(fatorialCompleto(5))