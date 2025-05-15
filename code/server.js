// const fs = require('fs')

// fs.readFile('./text.txt', "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// const loggerMiddleware = (req, res, next)=>{
//     console.log(req.method, req.url)
//     next()
// }

// app.use(loggerMiddleware)

// const isMatch = false

// if(isMatch){
//     try {
//       console.log("success")
//     } catch (error) {
//         console.log(error)
//     }
// }

const bcrypt = require('bcryptjs')
const userModel = require('./models/userModel')
const jwt = require('jsonwebtoken')

server.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            res.send("user not found")
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.send("password not match")
        }

        const accessToken = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn: "1h"})
        const refreshTokent = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn: "1d"})
        res.send({accessToken, refreshTokent})

    } catch (error) {
        console.log(error)
    }
})