const { Pool } = require('pg')
//const connectionString = "postgres://postgres:null@localhost:5432/webdb"

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'webdb',
    password: '123123123',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}