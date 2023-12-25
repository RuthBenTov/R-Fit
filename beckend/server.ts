import express from "express";
import usersRouter from "./API/Users/usersRoutes";
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use("/API/users", usersRouter);

app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}:)`);
});
