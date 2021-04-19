const { sum, myRemove, myRemoveWithoutCopy, fizzBuzz } = require('./exercicio1');

test('Teste função sum', () => {
  expect(typeof sum).toBe('function');
  expect(sum(2, 3)).toBe(5);
  expect(sum(0, 10)).toBe(10);
  expect(sum(1, -1)).toBe(0);
});

test('Teste da função myRemove', () => {
  expect(myRemove).toBeInstanceOf(Function);
  const removeTest = [1, 2, 3, 4];
  expect(myRemove(removeTest, 3)).toEqual([1, 2, 4]);
  expect(removeTest).toEqual([1, 2, 3, 4]);
  expect(myRemove(removeTest, 5)).toEqual([1, 2, 3, 4]);
});

test('Teste da função myRemoveWithoutCopy', () => {
  expect(myRemoveWithoutCopy).toBeInstanceOf(Function);
  const removeTestWithoutCopy = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy(removeTestWithoutCopy, 3)).toEqual([1, 2, 4]);
  expect(removeTestWithoutCopy).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy(removeTestWithoutCopy, 5)).toEqual([1, 2, 4]);
});

test('Teste da função fizzBuzz', () => {
  expect(fizzBuzz).toBeInstanceOf(Function);
  expect(fizzBuzz(15)).toBe('fizzbuzz');
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(7)).toBe(7);
  expect(fizzBuzz('oi')).toBe(false);
});

test('Teste de objetos', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
  expect(obj2).not.toEqual(obj3);
});
