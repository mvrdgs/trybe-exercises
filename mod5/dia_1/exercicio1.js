let paragraph = document.getElementsByTagName("p");
paragraph[1].innerText = "Me vejo trabalhando com desenvolvimento Java e ganhando um bom salário";

let mainContent = document.getElementsByClassName("main-content");
mainContent[0].style.backgroundColor = 'rgb(76,164,109)'

let centerContent = document.getElementsByClassName('center-content');
centerContent[0].style.backgroundColor = 'white';

let title = document.getElementsByClassName('title');
title[0].textContent = 'Exercício 5.1 - JavaScript';

function upperCase(parameter) {
  for (let index = 0; index < parameter.length; index += 1) {
    parameter[index].innerText = parameter[index].innerText.toUpperCase();
  }
  return parameter;
}

upperCase(paragraph);

console.log(paragraph);