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


connection.connect((err)=>{
    try {
        if(err) throw err;
        console.log("mySql🛢️ 🛢️   server is connected!🔥 🔥 🔥")
    } catch (error) {
        console.error(error)
    }
})

export default connection ;