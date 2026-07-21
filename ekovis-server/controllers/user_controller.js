const User = require('../models/user-model')
const mongoose = require('mongoose')

//create a new user
const createNewUser = async (req, res) => {
    const {username, password, role, currency} = req.body

    try {
        const user = await User.create({username, password, role, currency}) 
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dude, this isnt even a mongo id >:('})
    }

    const user = await User.findOneAndDelete({_id: id})
    if (!user) {
        return res.status(404).json({error: '...theres no one to delete?'})
    }
    
    res.status(200).json(user)
}

//update user info 
const updateUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dude, this isnt even a mongo id >:('})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error: 'Theres no one to update!'})
    }
    res.status(200).json(user)
}

module.exports = {
    createNewUser,
    deleteUser,
    updateUser
}