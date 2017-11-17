const model = require('../models/models.js')


//returns all therapists
function getAllTherapists (req, res, next) {
  model.getAllTherapists().then(data => {
    res.status(200).json({ data })
  })
}

//returns one therapist
function getOneTherapist(req, res, next) {
  let id = req.params.id
  model.getOneTherapist(id).then(data => {
    res.status(200).json({ data })
  })
}

//returns one client and count of their notes.
function getOneClient(req, res, next) {
  let clientID = req.params.id
  let body = req.body
  model.getOneClient(clientID, body).then(data => {
    res.status(200).json({ data })
  })
}

//returns list of all clients under certain therapist
function getAllClients(req, res, next) {
  model.getAllClients().then(data => {
    res.status(200).json({ data })
  })
}

function getAllNotes(req, res, next) {
  model.getAllNotes().then(data => {
    res.status(200).json({ data })
  })
}

//creates a new therapist

function createTherapist(req, res, next) {
  let body = req.body
  model.createTherapist(body).then(data => {
    res.status(200).json({ data })
  })
}

//creates a new client with no notes
function createClient(req, res, next) {
  let body = req.body
  model.createClient(body).then( data => {
    res.status(200).json({ data })
  })
}

//creates a new note for a client
function createNote(req, res, next) {
  let body = req.body
  model.createNote(body).then(data => {
    res.status(200).json({ data })
  })
}

//updates a therapist's info
function updateTherapist(req, res, next) {
  // let id = req.params.id
  let id = req.body.id
  let body = req.body
  console.log('in ctrl for updateTherapist', id, body)
  model.updateTherapist(id, body).then(data => {
    res.status(200).json({ data })
  })
}

//updates a client's info
function updateClient(req, res, next) {
  let id = req.params.id
  let body = req.body
  model.updateClient(id, body).then(data => {
    res.status(200).json({ data })
  })
}

//updates a single SOAP note.
function updateNote(req, res, next) {
  let id = req.params.id
  let body = req.body
  model.updateNote(id, body).then(data => {
    res.status(200).json({ data })
  })
}

//set's therapist to inactive
function destroyTherapist(req, res, next) {
  let id = req.params.id
  model.destroyTherapist(id).then(data => {
    res.status(200).json({ data })
  })
}

//set's client to inactive
function destroyClient(req, res, next) {
  let id = req.params.id
  model.destroyClient(id).then(data => {
    res.status(200).json({ data })
  })
}


module.exports = { getAllTherapists, getOneTherapist, getAllClients, getAllNotes, getOneClient, createTherapist, createClient, createNote, updateTherapist, updateClient, updateNote, destroyTherapist, destroyClient }
