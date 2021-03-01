let n = 13;
let verificaPrimo = 0;

for (let index = 1; index <= n; index += 1) {
  if (n % index == 0) {
    verificaPrimo += 1;
  }
}

console.log(verificaPrimo)

if (verificaPrimo == 2){
  console.log('O numero é primo');
} else {
  console.log('O numero não é primo');
}