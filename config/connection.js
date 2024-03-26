const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Chris001++",
    database:"parties_db"
})

connection.connect((err)=>{
    if(err){
        console.log(`error connecting ${err.stack}`)
        return;
    }
    console.log(`Connection established with id ${connection.threadId}`)
})

module.exports = connection;