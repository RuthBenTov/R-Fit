import express from "express"
import { createDB } from "./mySqlCtrl"
const router = express.Router()

router.post("/createDbByAdmin", createDB)

export default router