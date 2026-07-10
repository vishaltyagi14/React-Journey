import express from "express"
import { getDashboradOverview } from "../controllers/dashboardController.js"
import authMiddleWare from "../middlewares/auth.js"

const dashboardRouter = express.Router()

dashboardRouter.get('/',authMiddleWare,getDashboradOverview)

export default dashboardRouter