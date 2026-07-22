const express = require('express')
const { getAllUsers,getOneUser, createNewUser, deleteUser, updateUser } = require('../controllers/user_controller')

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.post('/', createNewUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router;