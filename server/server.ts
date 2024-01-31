import express from "express";
import connection from "./DB/database"
import cors from "cors";
import dotenv from "dotenv"
import mySqlRouter from "./API/DatabaseCreation/mySqlRouters"
import cookieParser from 'cookie-parser'
import eventRouts from "./API/Events/eventRouts";
import userRoutes from "./API/usersAPI/usersRoutes"
import { corsOptions } from "./config/corsOptions";
import { allowedOrigins } from "./config/allowedOrigin";


dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;



app.use(express.json());
// app.use(cors(corsOptions));
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed By CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
}));
// app.use(cors({
//   credentials:true,
//   origin: process.env.NODE_ENV === 'production' ? process.env.CLIENT_PROD_URL : process.env.CLIENT_DEV_URL,
// }));
app.use(cookieParser())

app.use("/API/MySql", mySqlRouter )
app.use("/API/users", userRoutes)
app.use("/API/events", eventRouts);


app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}❤️`);
  
});

// app.get("/api/check/sql", async (req,res)=>{
//   try {
//     console.log("check");
//     const query = "SELECT * FROM `check`"

//     connection.query(query,(error,results)=>{
//       try {
//         if (error) throw error;
//         res.send({ok: true, check: "checked", sqlResults:results});
//       } catch (error) {
//         res.status(500).send({ok: false, error:error});
//       }
//     })
    
//   } catch (error) {
//     res.status(500).send({error:error});
//   }
// })