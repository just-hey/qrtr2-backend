
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('therapists').del()
    .then(function () {
      // Inserts seed entries
      return knex('therapists').insert([
        {id: 1, first_name: 'Sarah', last_name: 'Paulson', active: true},
        {id: 2, first_name: 'Jack', last_name: 'E.Boi', active: true},
        {id: 3, first_name: 'Sam', last_name: 'Jessen', active: false}
      ]);
    });
};
