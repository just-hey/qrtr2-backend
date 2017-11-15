
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 1, first_name: 'Bob', last_name: 'Burger', active: true},
        {id: 2, first_name: 'Tiff', last_name: 'Annie', active: true},
        {id: 3, first_name: 'Pat', last_name: 'Smith', active: true}
      ]);
    });
};
