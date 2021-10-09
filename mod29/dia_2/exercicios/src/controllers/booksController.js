const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async(_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu ruim' });
  }
});

module.exports = router;
