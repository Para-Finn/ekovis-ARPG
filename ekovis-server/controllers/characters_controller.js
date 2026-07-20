const Chara = require('../models/chara-playable-model')
const mongoose = require('mongoose')

// Get all characters
const getAllChara = async (req, res) => {
    const charas = await Chara.find({}).sort({createdAt: -1})
    res.status(200).json(charas)
}

// Get a particular character
const getOneChara = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dude, this isnt even a mongo id >:('})
    }

    const chara = await Chara.findById(id)

    if (!chara) {
        return res.status(404).json({error: 'I cant find this character :('})
    }

    res.status(200).json(chara) 
}

// Create a new character
const createNewChara = async (req, res) => {
    const {name, species, level, xp, featrued} = req.body

    try {
        const player_chara = await Chara.create({name, species, level, xp, featrued}) 
        res.status(200).json(player_chara)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a character
const deleteChara = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dude, this isnt even a mongo id >:('})
    }

    const chara = await Chara.findOneAndDelete({_id: id})
    if (!chara) {
        return res.status(404).json({error: '...theres nothing to delete?'})
    }
    
    res.status(200).json(chara)
}

// Update a character
const updateChara = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dude, this isnt even a mongo id >:('})
    }

    const chara = await Chara.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!chara) {
        return res.status(404).json({error: 'Theres no character to update!'})
    }
    res.status(200).json(chara)
}

module.exports = {
    getAllChara,
    getOneChara,
    createNewChara,
    deleteChara,
    updateChara
}