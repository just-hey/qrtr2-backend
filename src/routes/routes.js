const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.js')

router.get('/therapist', ctrl.getAllTherapists)
router.get('/therapist/:id', ctrl.getOneTherapist)
router.get('/client', ctrl.getAllClients)
router.get('/client/:id', ctrl.getOneClient)

router.post('/therapist', ctrl.createTherapist)
router.post('/client', ctrl.createClient)

//halp
router.post('/client/:id', ctrl.createNote)

router.put('/therapist/:id', ctrl.updateTherapist)
router.put('/client/:id', ctrl.updateClient)

//halp
router.put('/:id/client/:id', ctrl.updateNote)

router.delete('/therapist/:id', ctrl.destroyTherapist)
router.delete('/client/:id', ctrl.destroyClient)

module.exports = router
