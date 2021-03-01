let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

 function longestName(array) {
  let longestName = array[0];
  for (let index = 0; index < array.length; index += 1) {
    let nameTest = array[index];
    if (nameTest.length > longestName.length){
      longestName = array[index];
    }
  }
  return longestName;
}

console.log(longestName(names));