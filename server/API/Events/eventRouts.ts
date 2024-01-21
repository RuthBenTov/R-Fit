import  express  from "express";
import { addEvent, getEvents } from "./eventCtrl";
const router = express.Router();

router.post("/addEvent", addEvent)
.get("/getEvents",getEvents)

export default router;
