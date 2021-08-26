const testaNumero = (numero) => {
  if (numero > 0) return 'positivo';
  if (numero === 0) return 'neutro';
  if (numero < 0) return 'negativo';
};

module.exports = testaNumero;
