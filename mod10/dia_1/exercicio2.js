module.exports = ([...technologies], name) => {
  if (technologies.length === 0) return "Vazio!";
  return technologies.sort().map((tech) => ({ tech, name }));
};
