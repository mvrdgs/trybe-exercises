const math = require('./conteudo');

test('Testando mock de subtrair', () => {
  math.subtrair = jest.fn().mockImplementation((a, b) => a - b);

  expect(math.subtrair(4, 2)).toBe(2);
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(4, 2);
});

test('Mock test of multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalled();
});

test('Mock test of somar', () => {
  math.somar = jest.fn().mockReturnValue(10);

  expect(math.somar(8, 2)).toBe(10);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(8, 2);
});

test('Mock test of dividir', () => {
  math.dividir = jest.fn()
    .mockReturnValue(10)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5)

  expect(math.dividir).toHaveBeenCalledTimes(0);

  expect(math.dividir(10, 5)).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(10, 5);

  expect(math.dividir(10, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir).toHaveBeenCalledWith(10, 2);

  expect(math.dividir(20, 2)).toBe(10);
  expect(math.dividir).toHaveBeenCalledTimes(3);
  expect(math.dividir).toHaveBeenCalledWith(20, 2);
});

test('Mock test of subtrair with spyOn', () => {
  let mathSubtrair = jest.spyOn(math, "subtrair");
  mathSubtrair = jest.fn().mockReturnValue(20);

  expect(mathSubtrair()).toBe(20);
  expect(mathSubtrair).toHaveBeenCalledTimes(1);

  mathSubtrair.mockRestore();
  mathSubtrair = jest.spyOn(math, "subtrair");
  expect(mathSubtrair(4, 2)).toBe(2);
});
