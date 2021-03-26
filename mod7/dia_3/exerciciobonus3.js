const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (words) => {
  const index = Math.floor(words.length/2);
  const middleWord = [words[index]];
  words.splice(index, 1);
  return middleWord;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);