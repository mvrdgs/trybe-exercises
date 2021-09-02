const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books;
};

const getByBookId = async (id) => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books WHERE id=?', [id]);

  return books.length ? books : null;
};

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId) return false;

  const [authors] = await await connection.execute(
    'SELECT id FROM authors WHERE id=?',
    [authorId],
  );
  
  if (!authors.length) return false;
  console.log('testando length', !authors.length);

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES(?, ?)',
  [title, authorId], 
);

module.exports = {
  getAll,
  getByBookId,
  isValid,
  create,
};
