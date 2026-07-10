import express  from "express"
import authMiddleware from '../middlewares/auth.js'
import {addExpense,getExpense,updateExpense,deleteExpense,downloadExpenseExcel,getExpenseOverView} from "../controllers/expenseController.js"

const expressRouter = express.Router();

expressRouter.post('/add',authMiddleware,addExpense)
expressRouter.get('/get',authMiddleware,getExpense)

expressRouter.put('/update/:id',authMiddleware,updateExpense)
expressRouter.get('/downloadexcel',authMiddleware,downloadExpenseExcel)

expressRouter.delete('/delete/:id',authMiddleware,deleteExpense)
expressRouter.get('/overview',authMiddleware,getExpenseOverView)

export default expressRouter