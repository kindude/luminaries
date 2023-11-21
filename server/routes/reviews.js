const express = require('express');
const router = express.Router();
const { Reviews, Books, Users } = require('../models');
const { json } = require('sequelize');


router.get('/latest', async (req, res) => {
  try {
    const latestReview = await Reviews.findAll({
      order: [['createdAt', 'DESC']],
      limit: 2,
      include: [
        {
          model: Books,
          as: 'book',
          attributes: ['cover_url'],
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });

    res.json(latestReview);
  } catch (error) {
    console.error('Error fetching latest reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;