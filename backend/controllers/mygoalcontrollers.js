const getGoals=(req,res)=>{
 res.send("getting goalss")
}


const postGoal=(req,res)=>{
    res.send("posting goals")
}

const putGoal=(req,res)=>{
    res.send(`update goal ${req.params.id}`)
}

const deleteGoal=(req,res)=>{
    res.send(`delete goal ${req.params.id}`)
}

module.exports={
getGoals,
postGoal,
putGoal,
deleteGoal
}