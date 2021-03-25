const assert = require('assert');

const greetPeople = (people) => {
  let arrayGreeting = [];
  
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    arrayGreeting.push(greeting);
  }
  return arrayGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);