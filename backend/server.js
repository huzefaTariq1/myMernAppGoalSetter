const express=require("express")
const dotenv=require("dotenv").config()
const mongoose=require('mongoose')
const port =process.env.PORT || 5000
console.log(port)
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))

mongoose.connect('mongodb://localhost/mygoals')
.then(()=>console.log("connected"))
.catch(err=>console.error("could not connect",err))



app.listen(port,()=>console.log( `app is running on port ${port}`))
