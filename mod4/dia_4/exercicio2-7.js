let w1 = "trybe";
let w2 = "be";

function confirmEnding (word, ending) {
  // if(word.substr(-ending.length) === ending){
  //   return true;
  // } else {
  //   return false;
  // }

  // return word.endsWith(ending);

  let letters = '';

  for (index = (word.length - ending.length); index < word.length; index += 1) {
    letters += word[index];
  }
  if (letters == ending) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding(w1, w2));