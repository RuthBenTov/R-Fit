import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()
const {mySqlPassword} = process.env;

const connection = mysql.createConnection({
    host: "sql11.freemysqlhosting.net",
    port: 3306,
    user: "sql11680287",
    password: mySqlPassword,
    database: "sql11680287"
  });
// var del = connection._protocol.delegateError;
// connection._protocol._delegateError = function(err, sequence){
//     if(err.fatal){
//         console.trace('fatal error ' + err.message);
//     }
//     return del.call(this, err, sequence);
// }

connection.connect((err)=>{
    try {
        if(err) throw err;
        console.log("mySql🛢️ 🛢️   server is connected!🔥 🔥 🔥")
    } catch (error) {
        console.error(error)
    }
})

export default connection ;