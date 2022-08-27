const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 8069,
    password: "admin",
    database:'tapas'
})


module.exports = pool


// const { Client } = require('pg')

// const client = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     port: 8069,
//     password: "admin",
//     database:'tapas'
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
