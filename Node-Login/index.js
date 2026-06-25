const express = require("express")
const app = express()
const bcrypt = require('bcrypt')

PORT = process.env.PORT || 3000
app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async(req, res) => {
    try {
        // const salt = await bcrypt.genSalt(5)
        const hash = await bcrypt.hash(req.body.password, 10)

        // console.log(salt)
        // console.log(hash)
        
        const user = { name: req.body.name, password: hash }
        users.push(user)

        res.status(201).send
    }catch{
        res.status(400).json({msg: "Something went wrong"})
    }
})

app.post('/users/login',async(req,res)=>{
    const user = users.find(u=> u.name===req.body.name)

    if(user==null){
        return res.status(200).json({msg:"username or password is wrong"})
    }
    try{
        const decrypted =await bcrypt.compare(req.body.password,user.password)
        // console.log(decrypted)
        if(decrypted){
            res.status(200).json({msg: "You are Allowed"})
        }else{
            res.status(200).json({msg: "username or password is wrong"})
        }
    }catch{
        res.status(400).json({msg: "Something went wrong"})
    }
})

app.listen(PORT)