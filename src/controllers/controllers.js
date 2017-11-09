const model = require('../models/models.js')


//returns all therapists
function getAllTherapists(req, res, next) {
  console.log('in ctrl');
  let data = model.getAllTherapists()
  res.status(200).json({ data })
}

//returns one therapist
function getOneTherapist(req, res, next) {

  res.status(200).json({ data })
}

//returns one client and number of their notes.
function getOneClient(req, res, next) {

  res.status(200).json({ data })
}

//returns list of all clients under certain therapist
function getAllClients(req, res, next) {

  res.status(200).json({ data })
}

//creates a new therapist
function createTherapist(req, res, next) {

  res.status(200).json({ data })
}

//creates a new client with no notes
function createClient(req, res, next) {

  res.status(200).json({ data })
}

//creates a new note for a client
function createNote(req, res, next) {

  res.status(200).json({ data })
}

//updates a therapist's info
function updateTherapist(req, res, next) {

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
