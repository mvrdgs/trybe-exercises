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

  // Crie uma função que recebe três parâmetros retorna uma Promise .
  // Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
  // Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

functionWithThreeParams(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
  .then((result) => console.log('Promise: %s', result))
  .catch((err) => console.log(err.message));

  // Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
  // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const testNumbers = async () => {
  try {
    console.log('Async/Await: %s', await functionWithThreeParams(generateRandomNumber(), generateRandomNumber(), generateRandomNumber()))
  } catch (err) {
    console.log(err.message);
  }
};

testNumbers()

// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .
