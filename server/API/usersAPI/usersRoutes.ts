import express from 'express';
import { getUserEvents, getUserIdFromCookie, loginUser, registerUser } from './usersControl';

const router = express.Router()


router
.post("/register",registerUser)
.post("/login",loginUser)
.get("/getUserByCookies", getUserIdFromCookie)
.get("/events", getUserEvents)


export default router