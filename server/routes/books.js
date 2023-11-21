const express = require('express');
const router = express.Router();
const { Books } = require('../models');
const { json } = require('sequelize');

router.get('/', async (req, res) => {

    const books = await Books.findAll();

    res.send(json(books));
});

router.get('/:bookId', async (req, res) =>{
   
    const bookId = req.params.bookId;
   const book = await Books.findOne({
    where: { id: bookId }, 

  });


  res.send(json(book));
});

module.exports = router;