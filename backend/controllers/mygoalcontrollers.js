const Joi = require("joi")
const MyGoals=require("../models/mygoalmodels")


const getGoals = (req, res) => {
    res.send("getting goalss")
}


const postGoal = async(req, res) => {

    const joiSchema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, joiSchema)


    if (result.error) {
        //400 bad request
        res.status(400).send(result.error.details[0].message)
    }
     
   const goal= await new MyGoals({
        name:req.body.name
    })
   const dbResult=await goal.save()
    res.send(dbResult)
}

const putGoal = (req, res) => {
    res.send(`update goal ${req.params.id}`)
}

const deleteGoal = (req, res) => {
    res.send(`delete goal ${req.params.id}`)
}

module.exports = {
    getGoals,
    postGoal,
    putGoal,
    deleteGoal
}