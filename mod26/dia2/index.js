const functionWithThreeParams = (param1, param2, param3) => new Promise((res, rej) => {
  if (
    typeof param1 !== 'number'
    || typeof param2 !== 'number'
    || typeof param3 !== 'number'
  ) rej(new Error('Informe apenas números'));
  else {
    const resultado = ((param1 + param2) * param3);
    if (resultado < 50) rej(new Error('Valor muito baixo'));
    else res(resultado);
  }
});

functionWithThreeParams(2, 5, '3')
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

  // Crie uma função que recebe três parâmetros retorna uma Promise .
  // Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
  // Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
