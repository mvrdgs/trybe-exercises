let n = 15;
let space = ' ';
let symbol = '*';
let line = '';
let position = n;

for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
  let spaceNumber = (n - indexColumn) / 2;
  for (indexLine = 0; indexLine < spaceNumber; indexLine += 1) {
    line += space;
  }
  for (indexLine = 0; indexLine < indexColumn; indexLine += 1) {
    line += symbol;
  }
  for (indexLine = 0; indexLine < spaceNumber; indexLine += 1) {
    line += space;
  }
  if (indexColumn % 2 != 0) {
    console.log(line)
  }
  line = '';
}