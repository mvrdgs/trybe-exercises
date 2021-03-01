let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem vinda, " + info.personagem);

info['recorrente'] = 'Sim';

console.log(info);

for (let content in info) {
  console.log(info[content]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let content in info, info2){
  if (info[content] === "Sim" && info2[content] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
  console.log(info[content] + " e " + info2[content]);
  }
}