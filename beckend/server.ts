import express from "express";
import usersRouter from "./API/Users/usersRoutes";
const app = express();
import cors from "cors";


const PORT = 3000;
app.use(cors());

app.use(express.json());

app.use("/API/users", usersRouter);

app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}:)`);
});
