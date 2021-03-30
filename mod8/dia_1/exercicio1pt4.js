const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkAnswers = (answerKeys) => (userAnswers) => () => {
//   let grade = 0;
//   for (let index = 0; index < answerKeys.length; index += 1) {
//     if (answerKeys[index] === 'N.A') grade += 0;
//     if (answerKeys[index] === userAnswers[index]) grade += 1;
//     if (answerKeys[index] !== userAnswers[index]) grade -= 0.5;
//   }
//   return grade;
// }

// console.log(checkAnswers(rightAnswers)(studentAnswers)());

const checkAnswers = (answerKeys, userAnswers, action) => {
  let grade = 0;
  for (let index = 0; index < answerKeys.length; index += 1) {
    grade += action(answerKeys[index], userAnswers[index]);
  }
  return grade;
}

console.log(checkAnswers(rightAnswers, studentAnswers, (keyAnswer, studentAnswer) => {
  if (keyAnswer === studentAnswer) return 1;
  if (keyAnswer === 'N.A') return 0;
  return -0.5;
}));