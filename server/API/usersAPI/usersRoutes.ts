import express from 'express';
import { loginUser, registerUser } from './usersControl';

const router = express.Router()


router
.post("/register",registerUser)
.post("/login",loginUser)


export default router