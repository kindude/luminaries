const express = require('express');
const router = express.Router();
const { Events } = require('../models');
const { json } = require('sequelize');
const { Users } = require('../models');


router.get('/', async (req, res) => {
    try {
      const events = await Events.findAll({
        include: [
          {
            model: Users,
            as: 'lecturer', 
            attributes: ['username'], 
          },
        ],
      });
  
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
    
    try {
      const event = await Events.findOne({
        where: { id: eventId }, 
        include: [{ model: Users, as: 'lecturer' }]
      });

      if (event) {
        res.json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      console.error('Error fetching event:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;
  