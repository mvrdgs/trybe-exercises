const counter = document.querySelector('#click-counter');
const button = document.querySelector('#click-btn');
counter.innerText = 1;

button.onclick = () => counter.innerText = + counter.innerText + 1;