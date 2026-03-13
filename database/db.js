const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "NovaSenha123!",
    database: "node_api",
    waitForConnections: true,
    connectionLimit: 10
})

console.log("MySQL pool conectado")

module.exports = pool