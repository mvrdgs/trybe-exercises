const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer.lastName = 'Ferreira';
console.log(customer.lastName);
console.log(Object.keys(customer));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// const showSkills = (student) => {
//   const skillsArray = Object.keys(student);
//   console.log('Estudante:')
//   for (let index = 0; index < skillsArray.length; index += 1) {
//     console.log(`Habilidade: ${skillsArray[index]}, Nível: ${student[skillsArray[index]]}`);
//   }
// }

// const showSkills = (student) => {
//   const skillsArray = Object.keys(student);
//   const levelArray = Object.values(student);
//   console.log('Estudante:')
//   for (let index = 0; index < skillsArray.length; index += 1) {
//     console.log(`Habilidade: ${skillsArray[index]}, Nível: ${levelArray[index]}`);
//   }
// }

const showSkills = (student) => {
  const skillsArray = new Map(Object.entries(student));
  console.log('Estudante:')
  console.log(skillsArray);
}

showSkills(student1);
showSkills(student2);
