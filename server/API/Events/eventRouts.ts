import  express  from "express";
import { addEvent, getAllEvents, getEvents, removeEventByID } from "./eventCtrl";
const router = express.Router();

router
.get("/", getAllEvents)
.post("/addEvent", addEvent)
.delete("/removeEventByID/:id", removeEventByID)
.get("/getEvents",getEvents)

export default router;
