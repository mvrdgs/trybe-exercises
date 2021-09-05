const Author = require('../models/Author');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const getByAuthorId = async (id) => {
  const author = await Author.getByAuthorId(id); 

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validation = isValid(firstName, middleName, lastName);

  if (!validation) return false;

  const { insertedId } = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  getByAuthorId,
  create,
};
