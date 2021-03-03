word = "boneca";

function verifyPalindrome(word) {
  let wordReverse = "";
  for(index = word.length; index > 0; index -= 1) {
    wordReverse += word[index - 1];
  }
  if (wordReverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPalindrome(word));