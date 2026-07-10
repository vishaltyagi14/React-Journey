import expense from "../models/expenseModel.js"
import XLSX from "xlsx"
import getDateRange from "../utils/dateFilter.js"


// Add Expense
export const addExpense = async (req, res) => {
    const userId = req.user._id
    const { description, amount, category, date } = req.body

    try {
        if (!description || !amount || !category || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newExpense = new expense({
            userId,
            description,
            amount,
            category,
            date: new Date(date)
        })
        await newExpense.save()
        res.json({
            success: true,
            message: "Expense added SuccesFully"
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// GET Expense 

export const getExpense = async (req, res) => {
    const userId = req.user._id
    try {
        const expenseList = await expense.find({ userId }).sort({ date: -1 })
        res.json(expenseList)
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// Update Expense 
export const updateExpense = async (req, res) => {
    const { id } = req.params
    const userId = req.user._id
    const { description, amount } = req.body

    try {
        const updatedExpense = await expense.findOneAndUpdate(
            { _id: id, userId },
            { description, amount },
            { new: true }
        )
        if (!updatedExpense) {
            return res.status(400).json({
                success: false,
                message: "Expense not Found"
            })
        }
        res.json({
            success: true,
            message: "Expense Updated Successfully",
            updatedExpense
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// Delete  
export const deleteExpense = async (req, res) => {
    try {
        const expense1 = await expense.findByIdAndDelete({
            _id: req.params.id
        })
        if (!expense1) {
            return res.status(400).json({
                success: false,
                message: "Expense Not Found"
            })
        }
        return res.json({
            success: true,
            message: "Expense Deleted Sucessfully"
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}


// Excel Sheet
export const downloadExpenseExcel = async (req, res) => {
    try {
        const userId = req.user._id
        const expense1 = await expense.find({ userId }).sort({ date: -1 })

        const plainData = expense1.map((exp) => ({
            Description: exp.description,
            Amount: exp.amount,
            Category: exp.category,
            Date: new Date(exp.date).toLocaleDateString()
        }))
        const worksheet = XLSX.utils.json_to_sheet(plainData)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "expense")
        XLSX.writeFile(workbook, "expense_details.xlsx")
        res.download("expense_details.xlsx")
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// Expense overview
export const getExpenseOverView = async (req, res) => {
    try {
        const userId = req.user._id;
        const { range = "monthly" } = req.query
        const { start, end } = getDateRange(range)

        const expenseList = await expense.find({
            userId, date: { $gte: start, $lte: end },
        }).sort({ date: -1 })


        const totalExpense = expenseList.reduce((acc, cur) => acc + cur.amount, 0);
        const averageExpense =
            expenseList.length > 0 ? totalExpense / expenseList.length : 0;
        const numberOfTransactions = expenseList.length;

        const recentTransactions = expenseList.slice(0, 9);

        res.json({
            success: true,
            data: {
                totalExpense,
                averageExpense,
                numberOfTransactions,
                recentTransactions,
                range
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}