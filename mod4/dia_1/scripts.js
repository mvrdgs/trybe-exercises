let notaCandidato = 98;

switch (true) {
  case notaCandidato >= 80 && notaCandidato <= 100:
    console.log ("Parabéns, você foi aprovado(a)");
    break;

  case notaCandidato >= 60 && notaCandidato < 80:
    console.log ("Você está na nossa lista de espera");
    break;

  case notaCandidato < 60 && notaCandidato >= 0:
    console.log("Você foi reprovado");
    break;

  default:
    console.log("não se aplica");
}