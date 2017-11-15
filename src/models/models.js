const uuid = require('uuid/v4')

let clients =
[
  {
    id: 1,
    first_name: 'Jack',
    last_name: 'Jackson',
    active: false,
  },
  {
    id: 2,
    first_name: 'Eric',
    last_name: 'Jackson',
    active: true
  },
  {
    id: 3,
    first_name: 'Sarah',
    last_name: 'Duddly',
    active: true
  }
]
//
let therapists =
[
  {
    id: 1,
    first_name: 'Bob',
    last_name: 'Dill',
    active: false
  },
  {
    id: 2,
    first_name: 'Jack',
    last_name: 'Smith',
    active: true
  },
  {
    id: 3,
    first_name: 'Tom',
    last_name: 'Gole',
    active: false
  }
]
//
// let therapists_clients =
// [
//   {
//     therapist_id: 1,
//     client_id:1
//   },
//   {
//     therapist_id: 1,
//     client_id: 2
//   }
// ]
//
// let notes =
// [
//   {
//     id: 1,
//     therapist_id: 1,
//     client_id: 1,
//     content: 'lots of words',
//     date_created: Date()
//   },
//   {
//     id: 2,
//     therapist_id: 1,
//     client_id: 2,
//     content: 'lots other of words',
//     date_created: Date()
//   }
// ]


// returns all therapists
function getAllTherapists() {
  return therapists
}
// function getAllTherapists() {
//   return knex('therapists')
// }


//returns one therapist
function getOneTherapist(id) {
  let errors = []
  let response
  for (var i = 1; i < therapists.length; i++) {
    console.log(i);
    if (therapists[i].id == id) {
      response = therapists[i]
    } else {
      errors.push('Can not find a therapist with that ID')
      response = errors
    }
  }
  return response
}

//THIS MAY WORK?
// function getOneTherapist(id) {
//   let errors = []
//   let response
//   let foundTherapist = knex('therapists').where({'id', id})
//   if (foundTherapist.length > 0) {
//     response = foundTherapist
//   } else {
//     errors.push('Can not find a therapist with that ID')
//     response = errors
//   }
//   return response
// }

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
function createClient(body) {
  let errors = []
  let response
  let first_name = body.first_name
  let last_name = body.last_name
  if ( !first_name || !last_name ) {
    errors.push('First and Last names are required')
    response = { errors }
  } else {
    let newClient = { id: uuid(), first_name, last_name, notes: [] }
    clients.push(newClient)
    response = newClient
  }
  return response
}

//creates a new client with no notes
function createTherapist(body) {
  let errors = []
  let response
  let first_name = body.first_name
  let last_name = body.last_name
  if ( !first_name || !last_name ) {
    errors.push('First and Last names are required')
    response = { errors }
  } else {
    let newTherapist = { id: uuid(), first_name, last_name, clients: [], active: true }
    therapists.push(newTherapist)
    response = newTherapist
  }
  return response
}

//creates a new note for a client
function createNote(body) {
  let errors = []
  let response
  let author = body.therapist_id
  let client = body.client_id
  let content = body.content
  if (!author || !client || !content) {
    errors.push('Author, Client, and content are all required.')
    response = { errors }
  } else {
    let newNote = { id: uuid(), therapist_id: author, client_id: client, content, date: Date() }
    notes.push(newNote)
    response = newNote
  }
  return response
}

//updates a therapists info
function updateTherapist(id, body) {
  let errors = []
  let response
  let first_name = body.first_name
  let last_name = body.last_name
  let active = body.active
  for (var i = 0; i < therapists.length; i++) {
    if (therapists[i].id == id) {
      let updatedTherapist = { id: id, first_name: first_name, last_name: last_name, active: active }
      therapists.splice(i, 1, updatedTherapist)
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
