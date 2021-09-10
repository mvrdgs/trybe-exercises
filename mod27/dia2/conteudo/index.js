const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const Author = require('./src/controllers/Author');
const Books = require('./src/controllers/Books');
const Errors = require('./src/middlewares/error');

app.use(Errors);

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.getByAuthorId);
app.post('/authors', Author.create);

app.get('/books', Books.getAll);
app.get('/books/:id', Books.getByAuthorId);
app.post('/books', Books.create);

app.listen(port, () => console.log('Running at 3001 port!'));
