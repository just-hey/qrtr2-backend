
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('therapists_clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('therapists_clients').insert([
        {therapist_id: 1, client_id: '2'},
        {therapist_id: 1, client_id: '3'},
        {therapist_id: 2, client_id: '1'},
        {therapist_id: 2, client_id: '3'},
        {therapist_id: 2, client_id: '3'},
        {therapist_id: 3, client_id: '2'},
        {therapist_id: 3, client_id: '3'}
      ]);
    });
};
