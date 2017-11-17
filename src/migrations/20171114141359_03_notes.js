
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments()
    table.integer('therapist_id').notNullable()
    table.integer('client_id').notNullable()
    table.foreign('therapist_id').references('therapists.id').onDelete('CASCADE')
    table.foreign('client_id').references('clients.id').onDelete('CASCADE')
    table.string('content').notNullable().defaultsTo('SOAP Note')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
