const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.get('/:id', function (req, res) {
  const index = req.params.id;
  const allBooks = booksData.all();
  res.json({books: allBooks[index]});
});

booksRouter.post('/', function(req, res) {
  const newBook = req.body.book;
  booksData.add(newBook);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.put('/:id', function(req, res) {
  const index = req.params.id;
  const updatedBook = req.body.book;
  booksData.update(index, updatedBook);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.delete('/:id', function(req, res) {
  const index = req.params.id;
  booksData.delete(index);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

module.exports = booksRouter;
