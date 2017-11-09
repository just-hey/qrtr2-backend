const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.js')

router.get('/', ctrl.getAllTherapists)
router.get('/:id', ctrl.getOneTherapist)
router.get('/:id/client/:id', ctrl.getOneClient)
router.get('/:id/client', ctrl.getAllClients)

router.post('/', ctrl.createTherapist)
router.post('/:id/client', ctrl.createClient)
router.post('/:id/client/:id', ctrl.createNote)

router.put('/:id', ctrl.updateTherapist)
router.put('/:id/client/:id', ctrl.updateClient)
router.put('/:id/client/:id', ctrl.updateNote)

router.delete('/:id', ctrl.destroyTherapist)
router.delete('/:id/client/:id', ctrl.destroyClient)

module.exports = router
