const sql = require('mysql2')

const db = sql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  multipleStatements: true,
})

module.exports = db