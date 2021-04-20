const {
  uppercase,
  getUserName,
} = require('./exercicio1')

describe('uppercase function test', () => {
  it('Teste assíncrono', (done) => {
    uppercase('oi', (str) => {
      expect(str).toBe('OI');
      done();
    });
  });
});

describe('Teste com Promise da função getUserName', () => {
  it('Testa se o user é encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((retorno) => {
      expect(retorno).toBe('Mark');
    });
  });
  it('Testa se o user não for encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error).toEqual({ error: 'User with 3 not found.' })
    });
  });
});


describe('Teste com async/await da função getUserName', () => {
  it('Testa se o user é encontrado', async () => {
    expect(await getUserName(4)).toBe('Mark');
    });
  it('Testa se o user não for encontrado', () => {
    try {
      getUserName(3);
    } catch {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});
