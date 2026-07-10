import express from "express"
import cors from "cors"
import { DBConnection } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import dotenv from "dotenv"
import incomeRouter from "./routes/incomeRoute.js"
import expenseRouter from "./routes/expenseRoute.js"
import dashboardRouter from "./routes/dashboardRoute.js"

const app = express()
const PORT = process.env.PORT || 3000

// MiddleWares
app.use(cors())
dotenv.config() 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// DB
DBConnection()

//ROUTES
app.use("/api/user",userRouter)
app.use("/api/income",incomeRouter)
app.use("/api/expense",expenseRouter)
app.use('/api/dashboard',dashboardRouter)

app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})