const statesContainer = document.querySelector('#state-box');
const startDate = document.querySelector('#start-date');
const submitBtn = document.querySelector('#submit-button');
const clearBtn = document.querySelector('#clear-button');
const form = document.querySelector('form');
const states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

function setStates() {
  for (let index in states) {
    const state = document.createElement('option');
    state.value = index;
    state.innerText = states[index];
    statesContainer.appendChild(state);
  }
}

// function verifyDate() {
//   const dateInput = startDate.value.split('/');
//   if (dateInput.toString() === '' || dateInput.length !== 3) {
//     alert("Data inválida");
//     startDate.value = '';
//     return;
//   }
//   if (dateInput[2] < 0) {
//     alert('Ano inválido');
//     startDate.value = '';
//     return;
//   }
//   if (dateInput[1] < 1 || dateInput[1] > 12) {
//     alert('Mês inválido');
//     startDate.value = '';
//     return;
//   }
//   if (dateInput[0] < 1 || dateInput[0] > 31) {
//     alert('Dia inválido');
//     startDate.value = '';
//     return;
//   }
// }

function submit(e) {
  e.preventDefault();
}

function clear() {
  form.reset();
}

window.addEventListener('DOMContentLoaded', function(){
  var myDatepicker = document.querySelector('input[name="start-date"]');

  myDatepicker.DatePickerX.init({
    mondayFirst      : true,
    format           : 'dd/mm/yyyy',
    minDate          : new Date(0, 0),
    maxDate          : new Date(9999, 11, 31),
    weekDayLabels    : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'],
    shortMonthLabels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    singleMonthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    todayButton      : true,
    todayButtonLabel : 'Today',
    clearButton      : true,
    clearButtonLabel : 'Clear'
  });
});

new window.JustValidate('.js-form');

// new window.JustValidate('.js-form', {
//   rules: {
//     fullName: {
//       required: true
//       minLength: 10;
//       maxLength: 40;
//     },
//   }
// });

clearBtn.addEventListener('click', clear)
// submitBtn.addEventListener('click', submit);
// startDate.addEventListener('focusout', verifyDate);
setStates();
