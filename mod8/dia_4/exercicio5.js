const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  return names.reduce((result, name) => result += name.toLowerCase().split('').filter((letter) => letter === 'a').length, 0);
}

assert.deepStrictEqual(containsA(names), 20);