import express from "express";
import connection from "./DB/database"
import usersRouter from "./API/Users/usersRoutes";
import cors from "cors";
import dotenv from "dotenv"
import mySqlRouter from "./API/DatabaseCreation/mySqlRouters"
import eventRouts from "./API/Events/eventRouts";

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/API/MySql", mySqlRouter )
app.use("/API/users", usersRouter);
app.use("/API/events", eventRouts);

app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}❤️`);

});