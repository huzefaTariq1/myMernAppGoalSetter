const express=require("express")

const router=express.Router()

router.get('/',(req,res)=>{
  res.status(200).send("getting goals")
})

router.post('/',(req,res)=>{
   res.send("post goals")
})

router.put('/:id',(req,res)=>{
    res.send(`update goal ${req.params.id}`)
})

router.delete('/:id',(req,res)=>{
    res.send(`delete goal ${req.params.id}`)
})



module.exports= router