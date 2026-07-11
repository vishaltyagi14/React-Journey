import income from "../models/income.js"
import XLSX from "xlsx"
import getDateRange from "../utils/dateFilter.js"


// Add Income
export const addIncome = async (req, res) => {
    try {
        const userId = req.user?._id   // ✅ ab try ke andar, aur optional chaining
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        const { description, amount, category, date } = req.body
        if (!description || !amount || !category || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newIncome = new income({
            userId,
            description,
            amount,
            category,
            date: new Date(date)
        })
        await newIncome.save()
        res.json({
            success: true,
            message: "Income added SuccesFully"
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}
// GET Income

export const getIncome = async (req, res) => {
    const userId = req.user._id
    try {
        const incomeList = await income.find({ userId }).sort({ date: -1 })
        res.json(incomeList)
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// Update Income 
export const updateIncome = async(req, res) => {
    const { id } = req.params
    const userId = req.user._id
    const { description, amount } = req.body

    try {
        const updatedIncome = await income.findOneAndUpdate(
            { _id: id, userId },
            { description, amount },
            { new: true }
        )
        if (!updatedIncome) {
            return res.status(400).json({
                success: false,
                message: "Income not Found"
            })
        }
        res.json({
            success: true,
            message: "Income Updated Successfully",
            updatedIncome
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
export const deleteIncome =async(req, res) => {
    try {
        const income1 = await income.findByIdAndDelete({
            _id: req.params.id
        })
        if (!income1) {
            return res.status(400).json({
                success: false,
                message: "Income Not Found"
            })
        }
        return res.json({
            success: true,
            message: "Income Deleted Sucessfully"
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
export const xlSheet = async(req, res) => {
    try {
        const userId = req.user._id
        const income1 = await income.find({ userId }).sort({ date: -1 })

        const plainData = income1.map((inc) => ({
            Description: inc.description,
            Amount: inc.amount,
            Category: inc.category,
            Date: new Date(inc.date).toLocaleDateString()
        }))
        const worksheet = XLSX.utils.json_to_sheet(plainData)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "income")
        XLSX.writeFile(workbook, "income_details.xlsx")
        res.download("income_details.xlsx")
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "Server Error"
        })
    }
}

// income overview
export const getIncomeOverView = async(req, res) => {
    try {
        const userId = req.user._id;
        const { range = "monthly" } = req.query
        const { start, end } = getDateRange(range)

        const incomeList = await income.find({
            userId, date: { $gte: start, $lte: end },
        }).sort({ date: -1 })

        const totalIncome = incomeList.reduce((acc, cur) => acc + cur.amount, 0);
        const averageIncome = incomeList.length > 0 ? totalIncome / incomeList.length : 0;
        const numberOfTransactions = incomeList.length;

        const recentTransactions = incomeList.slice(0, 9);

        res.json({
            success: true,
            data:{
                totalIncome,
                averageIncome,
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