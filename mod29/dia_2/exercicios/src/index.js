const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/books', booksController);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

module.exports = app;
