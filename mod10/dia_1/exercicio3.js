module.exports = (param) => {
  const array = param.split('');
  let counter = 0;
  array.forEach((digit) => {
    if (digit.match(/\d/g)) counter += Number(digit);
  });
  if (counter === 1) return '1 copo de água';
  if (counter > 1) return `${counter} copos de água`;
};