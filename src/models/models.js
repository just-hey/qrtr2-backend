const uuid = require('uuid/v4')

const therapist = [{
                    id: 1,
                    name: 'Justin',
                    clients: ['client1', 'client2', 'client3']
                  }]

//therapist
// [
//   {
//     id,
//     name,
//     clients [client1, client2, client3]
//   }
// ]

//client
// [
//   {
//     id,
//     name,
//     notes [note1, note2, note3],
//   }
// ]


//returns all therapists
function getAllTherapists() {
  console.log('models?');
  return therapist
}

//returns one therapist
function getOneTherapist() {

}

//returns one client
function getOneClient() {

}

//returns all clients
function getAllClients() {

}

function createTherapist() {

}

//creates a new client with no notes
function createClient() {

}

//creates a new note for a client
function createNote() {

}

function updateTherapist() {

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
