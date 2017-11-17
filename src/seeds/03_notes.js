
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert(
        //put it back here
      );
    });
};


// [
//   { therapist_id: 1, client_id: 2, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()},
//   { therapist_id: 3, client_id: 3, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()},
//   { therapist_id: 2, client_id: 1, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()}
// ]
