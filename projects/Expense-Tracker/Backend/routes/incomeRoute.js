import express from "express"
import authMiddleware from "../middlewares/auth.js"
import  {addIncome,deleteIncome,getIncomeOverView,xlSheet,updateIncome,getIncome} from "../controllers/incomeController.js"

const incomeRouter = express.Router();

incomeRouter.post('/add',authMiddleware,addIncome)
incomeRouter.get('/get',authMiddleware,getIncome)

incomeRouter.put('/update/:id',authMiddleware,updateIncome)
incomeRouter.get('/downloadexcel',authMiddleware,xlSheet)

incomeRouter.delete('/delete/:id',authMiddleware,deleteIncome)
incomeRouter.get('/overview',authMiddleware,getIncomeOverView)

export default incomeRouter

