const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  publishedYear: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
