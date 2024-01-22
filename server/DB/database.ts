import mySql from "mySql2";
import dotenv from "dotenv"

dotenv.config()
const {mySqlPassword} = process.env;

const connection = mySql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mySqlPassword,
    database: "r_fit"
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