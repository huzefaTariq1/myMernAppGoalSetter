//const { required } = require('joi/lib/types/lazy')
const mongoose=require('mongoose')


const goalSchema=new mongoose.Schema({
    name:{
        type:String
    }
})


module.exports=mongoose.model("MyGoals",goalSchema)

