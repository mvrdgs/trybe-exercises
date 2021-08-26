const fs = require('fs');

const testaNumero = (numero) => {
  if (typeof numero !== 'number') return 'Insira um valor numérico';
  if (numero > 0) return 'positivo';
  if (numero === 0) return 'neutro';
  if (numero < 0) return 'negativo';
};

const escreveTextoNoArquivo = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`./${nomeDoArquivo}`, conteudoDoArquivo);

  return 'OK';
};

module.exports = {
  testaNumero,
  escreveTextoNoArquivo,
};
