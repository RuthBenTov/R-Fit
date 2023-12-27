import express from "express";
import { login } from "./usersCtrl";

const router = express.Router();

router.get("/login", login);

export default router;
