const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.js')

router.get('/therapists', ctrl.getAllTherapists)
router.get('/therapists/:id', ctrl.getOneTherapist)
router.get('/clients', ctrl.getAllClients)
router.get('/clients/:id', ctrl.getOneClient) 

router.post('/therapists', ctrl.createTherapist)
router.post('/clients', ctrl.createClient)

//halp
router.post('/clients/:id', ctrl.createNote)

router.put('/therapists/:id', ctrl.updateTherapist)
router.put('/clients/:id', ctrl.updateClient)

//halp
router.put('/:id/clients/:id', ctrl.updateNote)

router.delete('/therapists/:id', ctrl.destroyTherapist)
router.delete('/clients/:id', ctrl.destroyClient)

module.exports = router
