let notaPorcentagem = 55;
let notaLetra;

switch (true){
  case (notaPorcentagem >= 90 && notaPorcentagem <= 100):
    notaLetra = "A";
    break;
  case (notaPorcentagem >= 80 && notaPorcentagem <= 100):
    notaLetra = "B";
    break;
  case (notaPorcentagem >= 70 && notaPorcentagem <= 100):
    notaLetra = "C";
    break;
  case (notaPorcentagem >= 60 && notaPorcentagem <= 100):
    notaLetra = "D";
    break;
  case (notaPorcentagem >= 50 && notaPorcentagem <= 100):
    notaLetra = "E";
    break;
  case (notaPorcentagem < 50):
    notaLetra = "F";
    break;
  default:
    console.log("A nota passada é inválida")
}

if(notaLetra != undefined){
  console.log("A nota é " + notaLetra);
}