import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

const authMiddleWare =async(req,res,next)=>{
    // Token Grab
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(400).json({
            success: false,
            message: "Not Authorized or token is missing"
        })
    }

    const token = authHeader.split(" ")[1]

     try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        const user =await User.findById(payload.id).select("-password")
        if(!user){
            return res.status(400).json({
            success: false,
            message: "User not Found"
        })
        }
        req.user =user
        next()
     } catch (err) {
        console.error("Jwt Verification Failed",err)
        return res.status(400).json({
            success: false,
            message: "Token Invalid"
        })
     }
}
export default authMiddleWare