const testaNumero = (numero) => {
  if (typeof numero !== 'number') return 'Insira um valor numérico';
  if (numero > 0) return 'positivo';
  if (numero === 0) return 'neutro';
  if (numero < 0) return 'negativo';
};

module.exports = {
  testaNumero,
};
