const express = require('express');
const router = express.Router();
const { Books } = require('../models');
const { json } = require('sequelize');

const { Users } = require('../models');

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'email', 'username'],
        });

        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;