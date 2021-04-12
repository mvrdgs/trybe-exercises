const specialFruit = ['kiwi', 'banana', 'abacaxi'];

const additionalItens = ['laranja', 'pêssego', 'melão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));