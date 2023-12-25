import express from 'express';
import { addUser,register } from './usersCtrl';

const router = express.Router();

router
    .get("/add-user", addUser)
    .post("/register", register)


export default router