let paragraph = document.getElementsByTagName("p");

function changeText(parameter, text) {
  parameter.innerText = text;
}

changeText(paragraph[1], 'Me vejo trabalhando com desenvolvimento Java e ganhando um bom salário');

function changeBgColor(parameter, color) {
  parameter.style.backgroundColor = color;
}

let mainContent = document.getElementsByClassName("main-content");

changeBgColor(mainContent[0], 'rgb(76,164,109)');

let centerContent = document.getElementsByClassName('center-content');

changeBgColor(centerContent[0], 'white');

let title = document.getElementsByClassName('title');

changeText(title[0], 'Exercício 5.1 - JavaScript')

function upperCase(parameter) {
  for (let index = 0; index < parameter.length; index += 1) {
    parameter[index].innerText = parameter[index].innerText.toUpperCase();
  }
  return parameter;
}

upperCase(paragraph);

function htmlPrint(parameter) {
  for (let index = 0; index < parameter.length; index += 1) {
    console.log(parameter[index].innerHTML);
  }
}

htmlPrint(paragraph);