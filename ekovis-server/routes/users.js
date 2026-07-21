const express = require('express')
const { createNewUser, deleteUser, updateUser } = require('../controllers/user_controller')

const router = express.Router()

router.post('/', createNewUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router;