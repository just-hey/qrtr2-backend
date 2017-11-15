let environment = process.env.NODE_ENV || 'development';
console.log(environment)
let knexConfig = require('./knexfile')
let config = knexConfig[environment];
let knex = require('knex');
let knexConnection = knex(config);


module.exports = knexConnection;
