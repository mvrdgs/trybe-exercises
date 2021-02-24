let custoProduto = 50;
let valorProduto = 100;
custoProduto *= 1.2;

if (custoProduto > 0 && valorProduto > 0 && valorProduto >= custoProduto) {
  console.log("O lucro da venda é de " + ((valorProduto - custoProduto) * 1000));
} else if (custoProduto > 0 && valorProduto > 0 && valorProduto < custoProduto){
  console.log("O prejuízo da venda é de " + ((valorProduto - custoProduto) * 1000))
} else {
  console.log("Um dos valores é 0 ou negativo")
}