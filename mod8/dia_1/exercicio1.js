const register = (name) => {
  return { name, email: `${name.replace(' ', '_').toLowerCase()}@trybe.com` };
}

const newEmployees = () => {
  const employees = {
    id1: register('Pedro Guerra'),
    id2: register('Luiza Drumond'),
    id3: register('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());