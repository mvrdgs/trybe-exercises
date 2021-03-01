let n = 6;
let contador = (n - 1) / 2;
let line = '';

for (let indexColumn = contador; indexColumn > 0; indexColumn -= 1) {
  for (let indexLine = indexColumn; indexLine > 0; indexLine -= 1) {
    line += ' ';
  }
  line += '*';
  for (let indexLine = contador - 0.5; indexLine > indexColumn; indexLine -= 0.5) {
    line += ' ';
  }
  if (indexColumn < contador){
    line += '*';
  }
  console.log(line);
  line = '';
}

if (n % 2 == 0) {
  n += 1;
}

for (let index = 0; index < n; index += 1) {
  line += '*';
}
console.log(line);