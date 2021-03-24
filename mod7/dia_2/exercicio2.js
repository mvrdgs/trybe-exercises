const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addValue = (object, key, value) => object[key] = value;

const listKeys = (object) => console.log(Object.keys(object));

const objectLength = (object) => console.log(Object.keys(object).length);

const listValues = (object) => console.log(Object.values(object));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const numberOfStudents = (object) => {
  const keys = Object.keys(object);
  let studentNumbers = 0;
  for (let index = 0; index < keys.length; index += 1) {
    studentNumbers += object[keys[index]].numeroEstudantes;
  }
  return studentNumbers;
}

const getValueByIndex = (object, index) => {
  const keys = Object.keys(object);
  return object[keys[index]];
}

const verifyPair = (object, key, value) => {
  if (Object.keys(object).includes(key) && Object.values(object).includes(value)) {
    return true;
  }
  return false;
}

addValue(lesson2, 'turno', 'manhã');
listKeys(lesson2);
objectLength(lesson2);
listValues(lesson2);
console.log(allLessons);
console.log(numberOfStudents(allLessons));
console.log(getValueByIndex(lesson2, 0));
console.log(verifyPair(lesson2, 'materia', 'Carlos'));