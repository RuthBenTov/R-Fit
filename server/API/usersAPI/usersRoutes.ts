import express from 'express';
import { getUserEvents, getUserIdFromCookie, loginUser, registerUser, updateUser } from './usersControl';

const router = express.Router()


router
.post("/register",registerUser)
.post("/login",loginUser)
.post("/getUserByCookies", getUserIdFromCookie)
.get("/events", getUserEvents)
.put("/update",updateUser )


export default router