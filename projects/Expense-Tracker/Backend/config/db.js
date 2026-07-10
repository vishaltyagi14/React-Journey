import mongoose from "mongoose";

export const DBConnection= async()=>{
    try {
        await mongoose.connect("mongodb+srv://vishaltyagi14102005_db_user:s5lkQEZ4JZ7K70T6@expenseapp.cicckwq.mongodb.net/Expense")
        console.log("Database Connected")
    } catch(err) {
        console.error("Database Connection Error:", err)
    }
}