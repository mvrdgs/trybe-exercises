const connection = require('./connection');
const { ObjectId } = require('mongodb');

// const getAll = async () => {
//   const [books] = await connection.execute('SELECT id, title, author_id FROM books');

//   return books;
// };

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

// const getByBookId = async (id) => {
//   const [books] = await connection.execute('SELECT id, title, author_id FROM books WHERE id=?', [id]);

//   return books.length ? books : null;
// };

const getByBookId = async (id) => {
  const books = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));

  return books ? books : null;
};

// const create = async (title, authorId) => connection.execute(
//   'INSERT INTO model_example.books (title, author_id) VALUES(?, ?)',
//   [title, authorId], 
// );

const create = async (title, authorId) => {
  return await connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }));
};

module.exports = {
  getAll,
  getByBookId,
  create,
};
