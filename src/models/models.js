const knex = require('../../knex.js')

// returns all therapists
// function getAllTherapists() {
//   return therapists
// }
function getAllTherapists() {
  return knex('therapists')
    .then( (response) => {
      return response
    })
}


//returns one therapist
function getOneTherapist(id) {
  let errors = []
  let response
  let foundTherapist
  return knex('therapists').where('id', '=', id)
    .then((response) => {
      console.log('on the inside', response);
      return response
    })
  console.log('maybe?');
  if (foundTherapist.length > 0) {
    response = foundTherapist
  } else {
    errors.push('Can not find a therapist with that ID')
    response = errors
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
// function getAllClients() {
//   return clients
// }
function getAllClients() {
  return knex('clients')
    .then( (response) => {
      return response
    })
}

function getAllNotes() {
  return knex('notes')
    .then((response) => {
      return response
    })
}

//creates a new therapist
function createClient(body) {
  let first_name = body.first_name
  let last_name = body.last_name
  console.log('in models for create client', first_name);
  return knex('clients')
  .insert({first_name, last_name})
  .then((response) => {
    console.log('then...');
    return response
  })
}

//creates a new client with no notes
function createTherapist(body) {
  let first_name = body.first_name
  let last_name = body.last_name
  return knex('therapists')
  .insert({first_name, last_name})
  .then((response) => {
    return response
  })
}

//creates a new note for a client
// function createNote(body) {
//   let errors = []
//   let response
//   let author = body.therapist_id
//   let client = body.client_id
//   let content = body.content
//   if (!author || !client || !content) {
//     errors.push('Author, Client, and content are all required.')
//     response = { errors }
//   } else {
//     let newNote = { id: uuid(), therapist_id: author, client_id: client, content, date: Date() }
//     notes.push(newNote)
//     response = newNote
//   }
//   return response
// }

function createNote(body) {
  let therapist_id = parseInt(body.therapist_id)
  let client_id = parseInt(body.client_id)
  let content = body.content
  console.log('in models for create note', client_id);
  return knex('notes')
  .insert({therapist_id, client_id, content, created_at: knex.fn.now()})
  .then((response) => {
    console.log('then...');
    return response
  })
}

//updates a therapists info
function updateTherapist(id, body) {
  let first_name2 = body.first_name
  let last_name2 = body.last_name
  // let active = body.isActive
  console.log('in models for update ther', first_name);
  return knex('therapists')
    .where({id: id})
    .update({ first_name: first_name2, last_name: last_name2})
    .then((response) => {
      return response
    })
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

module.exports = { getAllTherapists, getOneTherapist, getAllClients, getAllNotes, getOneClient, createTherapist, createClient, createNote, updateTherapist, updateClient, updateNote, destroyTherapist, destroyClient }
