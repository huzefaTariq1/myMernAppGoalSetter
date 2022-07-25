const express=require("express")

const router=express.Router()

const {getGoals,postGoal,putGoal,deleteGoal}=require("../controllers/mygoalcontrollers")

router.get('/',getGoals)

router.post('/',postGoal)

router.put('/:id',putGoal)

router.delete('/:id',deleteGoal)



module.exports= router