const Books = require('../models/Books');
const Author = require('../models/Author');

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId) return false;

  const authors = await Author.getByAuthorId(authorId);
  
  if (!authors) return false;

  return true;
};

const getAll = () => {
  return Books.getAll();
};

const getByBookId = (id) => {
  return Books.getByBookId(id);
}

const create = async (title, authorId) => {
  const validate = await isValid(title, authorId);

  if (!validate) return false;

  const createdBook = await Books.create(title, authorId);

  console.log(createdBook)

  return createdBook;
}

module.exports = {
  getAll,
  getByBookId,
  create,
};
