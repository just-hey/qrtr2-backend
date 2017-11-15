// Update with your config settings.
const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/soap_note_project',
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  }
}
