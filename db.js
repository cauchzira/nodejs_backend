const Pool  = require('pg').Pool

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'couriers_db',
  password: 'habr',
  port: 2009
})



module.exports = pool