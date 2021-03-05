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

whereYouAre.lastElementChild.id = 'novo-filho';
whereYouAre.firstElementChild.lastElementChild.id = 'novo-filho-do-filho';

//Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let novoFilho = document.getElementById('novo-filho');
novoFilho.parentNode.removeChild(novoFilho);

let novoFilhoDoFilho = document.getElementById('novo-filho-do-filho');
novoFilhoDoFilho.parentNode.removeChild(novoFilhoDoFilho);

let segundoFilhoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoFilhoEUltimoFilhoDoFilho.parentNode.removeChild(segundoFilhoEUltimoFilhoDoFilho);

let terceiroFilho = document.getElementById('terceiroFilho');
terceiroFilho.parentNode.removeChild(terceiroFilho);

let quartoFilho = document.getElementById('quartoEUltimoFilho');
quartoFilho.parentNode.removeChild(quartoFilho);

let ultimaDiv = whereYouAre.nextElementSibling;
ultimaDiv.parentNode.removeChild(ultimaDiv);

let primeiroFilho = whereYouAre.previousElementSibling;
primeiroFilho.parentNode.removeChild(primeiroFilho);