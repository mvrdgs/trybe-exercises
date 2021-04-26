let math = require('./exercicio1');

test('Muda randomNumber para resultado ser sempre 10', () => {
  math.randomNumber = jest.fn().mockReturnValue(10);

  expect(math.randomNumber()).toBe(10);
  expect(math.randomNumber).toHaveBeenCalledTimes(1);
});

test('Muda randomNumber para divisão de 2 números', () => {
  math.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(math.randomNumber(10, 5)).toBe(2);
  expect(math.randomNumber).toHaveBeenCalledTimes(1);
});

test('Muda randomNumber para multiplicação de 3 números, em seguida reseta e muda para dobro de um número', () => {
  let randomNum = jest.spyOn(math, 'randomNumber')
  randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(randomNum(10, 2, 3)).toBe(60);
  expect(randomNum).toHaveBeenCalledTimes(1);

  randomNum.mockRestore();
  randomNum = jest.fn().mockImplementation((a) => a * 2);
  expect(randomNum(5)).toBe(10);
  expect(randomNum).toHaveBeenCalledTimes(1);
});


test('Teste funcionamento de spyOn', () => {
  jest.spyOn(math, "upperCase")
    .mockImplementation((a) => a.toLowerCase());

  expect(math.upperCase('UPPERCASE')).toBe('uppercase');

  math.upperCase.mockRestore();

  expect(math.upperCase('lowercase')).toBe('LOWERCASE');
});
