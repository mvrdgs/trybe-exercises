const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Python'];

const replaceX = (word, string) => {
  string = string.split('x');
  return `${string[0]}${word}${string[1]}`
}

const message = (word, string) => {
  const studentName = replaceX(word, string);
  const skillsMessage = `${studentName} Minhas cinco principais habilidades são:
  ${skills[0]};
  ${skills[1]};
  ${skills[2]};
  ${skills[3]};
  ${skills[4]};

  #goTrybe`
  return skillsMessage;
}

console.log(message("Bebeto", "Tryber x aqui!"));