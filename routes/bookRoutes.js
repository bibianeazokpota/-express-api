const express = require('express');
const Book = require('../models/Book');
const Author = require('../models/Author');
const router = express.Router();

// Ajouter un livre
router.post('/', async (req, res) => {
  try {
    const { title, description, author, publishedYear } = req.body;
    const newBook = new Book({ title, description, author, publishedYear });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// Lire tous les livres
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

module.exports = router;
