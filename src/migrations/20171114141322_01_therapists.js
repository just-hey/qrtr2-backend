
exports.up = function(knex, Promise) {
  return knex.schema.createTable('therapists', table => {
    table.increments().primary()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.boolean('active').defaultsTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('therapists')
};
