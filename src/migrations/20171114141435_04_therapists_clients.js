
exports.up = function(knex, Promise) {
  return knex.schema.createTable('therapists_clients', table => {
    table.integer('therapist_id').notNullable()
    table.integer('client_id').notNullable()
    table.foreign('therapist_id').references('therapists.id').onDelete('CASCADE')
    table.foreign('client_id').references('clients.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('therapists_clients')
};
