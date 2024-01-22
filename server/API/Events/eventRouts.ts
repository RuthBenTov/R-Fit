import  express  from "express";
import { addEvent, getAllEvents, getEvents, removeEventByID } from "./eventCtrl";
import { isAdmin } from "../usersAPI/usersControl";
const router = express.Router();

router
.get("/", getAllEvents)
.post("/addEvent",isAdmin, addEvent)
.delete("/removeEventByID/:id",isAdmin ,removeEventByID)
.get("/getEvents",getEvents)

export default router;
