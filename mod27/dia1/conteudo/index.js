const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.getByAuthorId(id);

  if (!author) return res.status(404).json({ message: 'Not found'})

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.get('/books', async (req, res) => {
  const { authorId } = req.query;

  console.log(req.query);

  let books;

  if (authorId) books = await Books.getByAuthorId(authorId);
  else books = await Books.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Books.getByBookId(id);

  if (!books) return res.status(404).json({ message: 'Not found'})

  return res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const isValid = await Books.isValid(title, author_id);

  if (!isValid) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(title, author_id);

  return res.status(201).json({ message: 'Livro  criado com sucesso' });
});

app.listen(port, () => console.log('Running at 3001 port!'));
