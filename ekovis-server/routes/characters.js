const express = require('express');
const Chara = require('../models/chara-playable-model');
const router = express.Router();

router.get('/',  (req, res) => {
    res.json({mssg: 'I am getting all existing characters'})
});

router.get('/:id',  (req, res) => {
    res.json({mssg: 'I am getting a particular character'})
});

router.post('/', async (req, res) => {
    const {name, species, level, xp, featrued} = req.body;

    try {
        const player_chara = await Chara.create({name, species, level, xp, featrued}) 
        res.status(200).json(player_chara)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:id',  (req, res) => {
    res.json({mssg: 'I deleated this character'})
});

router.patch('/:id',  (req, res) => {
    res.json({mssg: 'This character is updated!'})
});

module.exports = router;