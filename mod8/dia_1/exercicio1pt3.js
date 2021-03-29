const checkAnswer = (rightAnswer) => (userAnswer) => (userAnswer.toLowerCase() === rightAnswer);

const answerKey = checkAnswer('high order function');
console.log(answerKey('HIGH ORDER FUNCTIOn'));