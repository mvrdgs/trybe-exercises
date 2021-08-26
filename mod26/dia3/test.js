const { expect } = require('chai');

const testaNumero = require('./index');

describe('Testa se o número recebido', () => {
  it('É maior que 0', () => {
    const resultado = testaNumero(10);

    expect(resultado).to.be.equals('positivo');
  });

  it('É menor que 0', () => {
    const resultado = testaNumero(-10);

    expect(resultado).to.be.equals('negativo');
  });

  it('É igual a 0', () => {
    const resultado = testaNumero(0);

    expect(resultado).to.be.equals('neutro');
  });
});
