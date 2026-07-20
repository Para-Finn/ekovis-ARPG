const express = require('express')
const { getAllChara, getOneChara, createNewChara, deleteChara, updateChara } = require('../controllers/characters_controller')

const router = express.Router()

router.get('/', getAllChara)

router.get('/:id', getOneChara)

router.post('/', createNewChara)

router.delete('/:id', deleteChara)

router.patch('/:id', updateChara)

module.exports = router;