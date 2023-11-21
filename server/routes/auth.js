
const express = require('express');
const router = express.Router();
const { Users } = require('../models'); 

router.get('/example', (req, res) => {
    console.log(Users.create);

    res.send('<h1> Hello World</h1>');
});

router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await Users.create(user);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.post('/login', async(req, res) => {
    try{
        const credentials = req.body;
        const user = await Users.findOne({where:{email: credentials['email']}})
        console.log()
        if ( user.password !== credentials['password']){
            throw error('unsuccessfull login')
        }
        else{
            res.status(200).json({ok: 'authenticated'})
        }
    }
    catch(error){
        console.error(error);
        res.status(403).json({error: 'Not authenticated'});
    }
});


module.exports = router;
    