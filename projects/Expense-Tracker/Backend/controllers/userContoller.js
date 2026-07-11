import User from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken=(userId)=>{
    return jwt.sign({id: userId},process.env.JWT_SECRET,{expiresIn: '24h'})
}


// SIGNUP
export const registerUser =async(req,res)=>{
    const {name,email,password}= req.body
    if(!name || !password ||!email){
        return res.status(400).json({
            success: false,
            message: "All Fields Are Required"
        })
    }

    if(!validator.isEmail(email)){
        return res.status(400).json({
            success: false,
            message: "Invalid Email"
        })
    }

    if(password.length<8){
        return res.status(400).json({
            success: false,
            message: "Password must be atleast 8 character long"
        })
    }

    try{
        if(await User.findOne({email})){
        return res.status(400).json({
            success: false,
            message: "User Already Exist"
        })
    }

    const hash = await bcrypt.hash(password,10)
    const user= await User.create({name,email,password:  hash})
    const token= createToken(user._id)
    res.status(200).json({
        success: true,
        token,
        user: {id: user._id,name: user.name, email: user.email}
    })
    }catch(err){
        console.error(err)
        res.status(500).json
        ({success:  false,
        message: "Server error"})
    }
}

// LOGIN

export const loginUser=async(req,res)=>{
    const {email,password}= req.body
    if(!email||!password){
        return res.status(400).json({
            success: false,
            message: "All Fields Are Required"
        })
    }

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
            success: false,
            message: "Email or password is wrong"
        })
        }

        const match = await bcrypt.compare(password,user.password)

        if(!match){
            return res.status(400).json({
            success: false,
            message: "Email or password is wrong"
        })
        }
        const token = createToken(user._id)

        res.json({
            success: true,
            token,
            user :{id: user._id,name: user.name, email: user.email}
        })
        
    }catch(err){
        console.error(err)
        res.status(500).json
        ({success:  false,
        message: "Server error"})
    }
}
 
// CURRENT USER
export const currUser=async(req,res)=>{
    try{
        const user= await User.findById(req.user.id).select("name email")
    if(!user){
        return res.status(400).json({
            success: false,
            message: "User not Found"
        })
    }
    res.json({success: true,user})
    }catch(err){
        console.error(err)
        res.status(500).json
        ({success:  false,
        message: "Server error"})
    }

}

// UPDATE USER

export const updUser =async(req,res)=>{
    const {name ,email}= req.body
    if(!email||!name||!validator.isEmail(email)){
        return res.status(400).json({
            success: false,
            message: "All Fields Are Required"
        })
    }

    try{
        const exists = await User.findOne({email,_id:{$ne: req.user.id}})
        if(exists){
            return res.status(409).json({
                success: false,
                message: "Email Already in Use"
            })
        }
        const user = await User.findByIdAndUpdate(req.user.id,{
            name,email
        },{
            new: true, runValidators: true,select: "name email"
        })
        res.json({
            success: true,
            user
        })
    }catch(err){
        console.error(err)
        res.status(500).json
        ({success:  false,
        message: "Server error"})
    }
}

// Change Password 
export const updPassword = async(req,res)=>{
    const { currentPassword, newPassword } = req.body   // ✅ match frontend
    if(!currentPassword || !newPassword || newPassword.length<8){
        return res.status(401).json({
            success: false,
            message: "Password invalid or too Short"
        })
    }

    try {
        const user = await User.findById(req.user.id).select("password")
        if(!user){
            return res.status(400).json({ success: false, message: "User Not Found" })
        }
        const match = await bcrypt.compare(currentPassword, user.password)  // ✅
        if(!match){
            return res.status(400).json({ success: false, message: "Incorrect Password" })
        }

        user.password = await bcrypt.hash(newPassword, 10)
        await user.save()
        res.json({ success: true, message: "Password Changed" })
    } catch(err){
        console.error(err)
        res.status(500).json({ success: false, message: "Server error" })
    }
}