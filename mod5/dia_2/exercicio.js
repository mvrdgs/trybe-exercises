// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let title = document.body.appendChild(document.createElement('h1'));
title.innerText = 'Exercício 5.2';

// Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.body.appendChild(document.createElement('div'));
mainContent.className = 'main-content';

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = mainContent.appendChild(document.createElement('div'));
centerContent.className = 'center-content';

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = centerContent.appendChild(document.createElement('p'));
paragraph.innerText = 'loren ipsum';

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = mainContent.appendChild(document.createElement('div'));
leftContent.className = 'left-content';

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = mainContent.appendChild(document.createElement('div'));
rightContent.className = 'right-content';

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let image = leftContent.appendChild(document.createElement('img'));
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ulList = rightContent.appendChild(document.createElement('ul'));
for(let index = 1; index <= 10; index += 1) {
  let lista = document.createElement('li');
  lista.innerText = index;
  ulList.appendChild(lista);
}

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for(let index = 0; index < 3; index += 1) {
  mainContent.appendChild(document.createElement('h3'));
}

// Adicione a classe title na tag h1 criada;
title.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
let h3Tags = document.querySelectorAll('h3');
for(let index of h3Tags){
  index.className = 'description';
}

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
leftContent.parentNode.removeChild(leftContent);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
rightContent.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
centerContent.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
for(index = 0; index < 2; index += 1) {
  let liDelete = ulList.lastChild;
  liDelete.parentNode.removeChild(liDelete);
}