const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Deu ruim' });
  }
});

module.exports = router;
