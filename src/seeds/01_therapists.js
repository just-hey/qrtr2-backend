
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('therapists').del()
    .then(function () {
      // Inserts seed entries
      return knex('therapists').insert([
        {first_name: 'Sarah', last_name: 'Paulson', active: true},
        {first_name: 'Jack', last_name: 'E.Boi', active: true},
        {first_name: 'Sam', last_name: 'Jessen', active: false}
      ]);
    });
};
