const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.listen(3001, () => console.log('3001'));

app.post('/drinks', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) return res.status(204).send('Dados inválidos')

  const check = drinks.find((drink) => drink.name === name);
  
  if (check) res.status(304).send('Item já cadastrado!');

  drinks.push({ id: (drinks[drinks.length - 1]['id']) + 1, name, price });

  return res.status(201).send('Item cadastrado com sucesso');
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!name && !price) return res.status(204).send('Dados inválidos!');

  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));

  if (name) drinks[drinkIndex].name = name;
  if (price) drinks[drinkIndex].price = price;

  return res.status(202).send('Item alterado');
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));

  if (drinkIndex === -1) return res.status(304).send('Item não encontrado');

  console.log(drinkIndex);

  drinks.splice(drinkIndex, 1);

  return res.status(202).send('Item excluído');
})

app.get('/drinks', (_req, res) => res.json(drinks));

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const result = drinks.filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()));

  return res.json(result);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const response = drinks.find((drink) => drink.id === Number(id));

  if (!response) return res.status(304).send('Item não encontrado')

  return res.json(response);
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});
