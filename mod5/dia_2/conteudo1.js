// Acesse o elemento elementoOndeVoceEsta .
let whereYouAre = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereYouAre.parentNode.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
whereYouAre.firstElementChild.innerText = 'bla bla bla'

// Acesse o primeiroFilho a partir de pai .
whereYouAre.parentNode.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
whereYouAre.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
whereYouAre.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
whereYouAre.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
whereYouAre.parentNode.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta .
whereYouAre.parentNode.appendChild(document.createElement('div'));

// Crie um filho para elementoOndeVoceEsta .
whereYouAre.appendChild(document.createElement('div'));

// Crie um filho para primeiroFilhoDoFilho .
whereYouAre.firstElementChild.appendChild(document.createElement('div'));

// A partir desse filho criado, acesse terceiroFilho .
whereYouAre.firstElementChild.firstElementChild.parentNode.parentNode.nextElementSibling