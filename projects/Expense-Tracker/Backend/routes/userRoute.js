import express from "express"
import { registerUser, loginUser, currUser, updUser, updPassword } from "../controllers/userContoller.js"
import authMid from "../middlewares/auth.js"

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

// PROTECTED ROUTES
router.get('/me',authMid,currUser)
router.put('/profile',authMid,updUser)
router.put('/password',authMid,updPassword)

export default router