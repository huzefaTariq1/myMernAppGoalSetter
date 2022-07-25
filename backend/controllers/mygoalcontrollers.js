const Joi = require("joi")


const getGoals = (req, res) => {
    res.send("getting goalss")
}


const postGoal = (req, res) => {

    const joiSchema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, joiSchema)


    if (result.error) {
        //400 bad request
        res.status(400).send(result.error.details[0].message)
    }

    res.send("posting goals")
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