const longestWord = (string) => {
  string = string.split(' ');
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index].length > word.length) {
      word = string[index];
    }
  }
  return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

const longestWord2 = (string) => {
  let longestWord = string.split(' ').sort((a, b) => (b.length - a.length));
  return longestWord[0];
}

console.log(longestWord2("Antônio foi no banheiro e não sabemos o que aconteceu"));