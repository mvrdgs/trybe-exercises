const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { testaNumero, escreveTextoNoArquivo } = require('./index');

describe('Testa se o número recebido', () => {
  it('É do tipo \'number\'', () => {
    const resultado = testaNumero('5');

    expect(resultado).to.be.equals('Insira um valor numérico')
  });

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

describe('Verifica se a função escreve o conteúdo em um arquivo específico', () => {
  before(() => sinon.stub(fs, 'writeFileSync'))

  it('Em caso de sucesso, retorna \'OK\'', () => {
    const resultado = escreveTextoNoArquivo('teste.txt', 'lalala');
    
    expect(resultado).to.be.equals('OK');
  });
});
