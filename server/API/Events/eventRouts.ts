import  express  from "express";
import { addEvent } from "./eventCtrl";
const router = express.Router();

router.post("/addEvent", addEvent);

export default router;
