const mysql = require('mysql')

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "springdb"
})

conexion.connect(function(error) {
  if (error) throw error
  console.log("Connected!")
})

module.exports=conexion