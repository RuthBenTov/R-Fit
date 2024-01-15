import express from 'express';
import { getUserIdFromCookie, loginUser, registerUser } from './usersControl';

const router = express.Router()


router
.post("/register",registerUser)
.post("/login",loginUser)
.get("/getUserByCookies", getUserIdFromCookie)


export default router