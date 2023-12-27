import express from "express";
import { login } from "./usersCtrl";

const router = express.Router();

router.post("/login", login);

export default router;
