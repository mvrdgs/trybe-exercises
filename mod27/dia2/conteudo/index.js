const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const Author = require('./services/Author');
const Books = require('./services/Books');

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

  const author = await Author.create(first_name, middle_name, last_name);
  
  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  return res.status(201).json(author);
});

app.get('/books', async (req, res) => {
  const { authorId } = req.query;

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

  const bookCreated = await Books.create(title, author_id);

  if (!bookCreated) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  return res.status(201).json({ message: 'Livro  criado com sucesso', bookCreated });
});

app.listen(port, () => console.log('Running at 3001 port!'));
