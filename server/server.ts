import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { corsOptions } from "./config/corsOptions";
import connection from "./DB/database"
import mySqlRouter from "./API/DatabaseCreation/mySqlRouters"
import cookieParser from 'cookie-parser'
import eventRouts from "./API/Events/eventRouts";
import userRoutes from "./API/usersAPI/usersRoutes"
import { allowedOrigins } from "./config/allowedOrigin";


dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(cors(corsOptions));

app.use(cookieParser())

app.use("/API/MySql", mySqlRouter )
app.use("/API/users", userRoutes)
app.use("/API/events", eventRouts);


app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}❤️`);
  
});

