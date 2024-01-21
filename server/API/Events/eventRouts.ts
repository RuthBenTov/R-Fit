import  express  from "express";
import { addEvent, getAllEvents, removeEventByID } from "./eventCtrl";
const router = express.Router();

router
.get("/", getAllEvents)
.post("/addEvent", addEvent)
.delete("/removeEventByID/:id", removeEventByID);

export default router;
