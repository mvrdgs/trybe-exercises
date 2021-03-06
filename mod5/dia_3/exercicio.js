function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// Copiar
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const fridays = [4, 11, 18, 25];

function calendarDays(array) {
  let daysList = document.getElementById('days');

  for(index = 0; index < array.length; index += 1) {
    let dayNumber;
    dayNumber = document.createElement('li');
    dayNumber.className = 'day';
    dayNumber.innerText = array[index];
  
    if(parseInt(dayNumber.innerText) === 24 || parseInt(dayNumber.innerText) === 25 || parseInt(dayNumber.innerText) === 31) {
      dayNumber.className += ' holiday';
    }

    if(parseInt(dayNumber.innerText) === 4 || parseInt(dayNumber.innerText) === 11 || parseInt(dayNumber.innerText) === 18 || parseInt(dayNumber.innerText) === 25) {
      dayNumber.className += ' friday';
    }
    daysList.appendChild(dayNumber);
  }
}

calendarDays(dezDaysList);
// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createHolidayButton(buttonName){
  let buttonsContainer = document.querySelector('.buttons-container');
  let holidayButton = document.createElement('button');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = buttonName;
  buttonsContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let holidayButton = document.querySelector('button');

holidayButton.addEventListener("click", clickColor);

let active = 0;

function clickColor() {
  let holidays = document.getElementsByClassName('holiday');
  if(active === 0){
    for(let index = 0; index < holidays.length; index += 1){
      holidays[index].style.backgroundColor = 'rgb(0,0,255)';
    }
    active = 1;
  } else {
    for(let index = 0; index < holidays.length; index += 1){
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    active = 0;
  }
};

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

