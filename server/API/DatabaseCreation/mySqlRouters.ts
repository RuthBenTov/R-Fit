import express from "express"
import { createDB, createTrainingTable, createUsersTable } from "./mySqlCtrl"
const router = express.Router()

router.post("/createDbByAdmin", createDB)
router.post("/createTrainingTableByAdmin", createTrainingTable)
router.post("/createUsersTableByAdmin", createUsersTable)


export default router