
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, therapist_id: 1, client_id: 2, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()},
        {id: 2, therapist_id: 3, client_id: 3, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()},
        {id: 3, therapist_id: 2, client_id: 1, content: 'SOAP Note?  Look at all this info!?', created_at: knex.fn.now()}
      ]);
    });
};
