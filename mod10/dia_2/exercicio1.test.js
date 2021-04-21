const {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
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
  it('Testa se o user não for encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});

describe('Teste de API da função getRepos', () => {
  it('Verifica se a API contém sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
