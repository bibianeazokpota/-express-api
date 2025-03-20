const express = require('express');
const Author = require('../models/Author');
const router = express.Router();

// Ajouter un auteur
router.post('/', async (req, res) => {
  try {
    const { name, biography } = req.body;
    const newAuthor = new Author({ name, biography });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// Lire tous les auteurs
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

module.exports = router;
