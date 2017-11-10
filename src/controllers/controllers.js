const model = require('../models/models.js')


//returns all therapists
function getAllTherapists (req, res, next) {
  let data = model.getAllTherapists()
  res.status(200).json({ data })
}

//returns one therapist
function getOneTherapist(req, res, next) {
  let id = req.params.id
  let data = model.getOneTherapist(id)
  res.status(200).json({ data })
}

//returns one client and count of their notes.
function getOneClient(req, res, next) {
  let clientID = req.params.id
  let body = req.body
  let data = model.getOneClient(clientID, body)
  res.status(200).json({ data })
}

//returns list of all clients under certain therapist
function getAllClients(req, res, next) {
  let data = model.getAllClients()
  res.status(200).json({ data })
}

//creates a new therapist
function createTherapist(req, res, next) {
  let body = req.body
  let data = model.createTherapist(body)
  res.status(200).json({ data })
}

//creates a new client with no notes
function createClient(req, res, next) {
  let body = req.body
  let data = model.createClient(body)
  res.status(200).json({ data })
}

//creates a new note for a client
function createNote(req, res, next) {
  
  res.status(200).json({ data })
}

//updates a therapist's info
function updateTherapist(req, res, next) {
  let id = req.params.id
  let body = req.body
  let data = model.updateTherapist(id, body)
  res.status(200).json({ data })
}

//updates a client's info
function updateClient(req, res, next) {

  res.status(200).json({ data })
}

//updates a single SOAP note.
function updateNote(req, res, next) {

  res.status(200).json({ data })
}

//set's therapist to inactive
function destroyTherapist(req, res, next) {

  res.status(200).json({ data })
}

//set's client to inactive
function destroyClient(req, res, next) {

  res.status(200).json({ data })
}


module.exports = { getAllTherapists, getOneTherapist, getAllClients, getOneClient, createTherapist, createClient, createNote, updateTherapist, updateClient, updateNote, destroyTherapist, destroyClient }
