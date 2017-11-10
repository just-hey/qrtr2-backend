const uuid = require('uuid/v4')
let clients =
[
  {
    id: 10,
    firstName: 'Jack',
    lastName: 'Jackson',
    notes: [],
  },
  {
    id: 11,
    firstName: 'Eric',
    lastName: 'Jackson',
    notes: [],
  },
  {
    id: 12,
    firstName: 'Sarah',
    lastName: 'Duddly',
    notes: [],
  }
]

const therapist =
[
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Dill',
    clients: [],
    active: true
  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Gole',
    clients: [],
    active: false
  }
]



//returns all therapists
function getAllTherapists() {
  return therapist
}

//returns one therapist
function getOneTherapist(id) {
  let errors = []
  let response
  for (var i = 0; i < therapist.length; i++) {
    if (therapist[i].id == id) {
      response = therapist[i]
    } else {
      errors.push('Can not find a therapist with that ID')
      response = errors
    }
  }
  return response
}

//returns one client
function getOneClient(id) {
  let errors = []
  let response
  for (var i = 0; i < clients.length; i++) {
    if (clients[i].id == id) {
      response = clients[i]
    } else {
      errors.push('Can not find a client with that ID')
      response = errors
    }
  }
  return response
}

//returns all clients
function getAllClients() {
  return clients
}

//creates a new therapist
function createTherapist(body) {
  let errors = []
  let response
  let firstName = body.firstName
  let lastName = body.lastName
  if ( !firstName || !lastName ) {
    errors.push('First and Last names are required')
    response = { errors }
  } else {
    let newClient = { id: uuid(), firstName, lastName, notes: [] }
    clients.push(newClient)
    response = newClient
  }
  return response
}

//creates a new client with no notes
function createClient(body) {
  let errors = []
  let response
  let firstName = body.firstName
  let lastName = body.lastName
  if ( !firstName || !lastName ) {
    errors.push('First and Last names are required')
    response = { errors }
  } else {
    let newTherapist = { id: uuid(), firstName, lastName, clients: [], active: true }
    therapist.push(newTherapist)
    response = newTherapist
  }
  return response
}

//creates a new note for a client
function createNote() {

}

//updates a therapists info
function updateTherapist(id, body) {
  let errors = []
  let response
  let firstName = body.firstName
  let lastName = body.lastName
  let active = body.active
  for (var i = 0; i < therapist.length; i++) {
    if (therapist[i].id == id) {
      let updatedTherapist = { id: id, firstName: firstName, lastName: lastName, active: active }
      therapist.splice(i, 1, updatedTherapist)
      response = updatedTherapist
    }
  return response
  }
}

//updates a client's info
function updateClient() {

}

//updates a single SOAP note.
function updateNote() {

}

//set's therapist to inactive
function destroyTherapist() {

}

//set's client to inactive
function destroyClient() {

}

module.exports = { getAllTherapists, getOneTherapist, getAllClients, getOneClient, createTherapist, createClient, createNote, updateTherapist, updateClient, updateNote, destroyTherapist, destroyClient }
