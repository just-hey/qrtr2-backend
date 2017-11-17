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
  },
  production: {
    client: 'postgresql',
    connection: 'postgres://douyotilmxtqhj:ec63124b41ffdd6ec9070f599bc9f0b09b4e91b01210f5f464a8f03401ce7b10@ec2-107-21-109-15.compute-1.amazonaws.com:5432/d7pmbilusv113m' + '?ssl=true'
  }
}
