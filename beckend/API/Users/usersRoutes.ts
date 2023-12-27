import express from "express";
import { addUser } from "./usersCtrl";

const router = express.Router();

router.get("/add-user", addUser);

export default router;
