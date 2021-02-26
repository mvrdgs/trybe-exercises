let n = 5;
let space = ' ';
let symbol = '*';
let line = '';
let position = (n - 1);


for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
  for(let indexLine = 0; indexLine < n; indexLine += 1) {
    if (indexLine < position) {
      line += space;
    } else {
      line += symbol;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
}