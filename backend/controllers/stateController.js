const State = require('../models/State');
let statesArr = require('../states')



const getStates = async (req, res) => {
    await State.find()
    .then((states) => res.json({success: true, status: 200, message: "State Detail", timestamp: Date.now(), state: states}))
    
    .catch((err) => res.status(400).json("Error: " + err))
}

const addState = async (req, res) => {
    const _id = statesArr.length+1
    const { state_name } = req.body;
    console.log(req.body)
    await State.find({state_name: state_name})
    .then((states) => {
        console.log("test states",states);
        if(states.length === 0){
            const newState = new State({ _id, state_name });  
            statesArr.push(newState)
            console.log(statesArr)
            newState
                .save()
                .then(() => res.json({success: true, status: 200, message: "State Added Successfully"}))
                .catch((err) => res.status(400).json("Error: " + err));
        } 
        else
            res.json({success: false, status: 200, message: "State name already exists"})
        return;
    })
    .catch((err) => res.status(400).json("Error: " + err));
    
}

module.exports = { getStates, addState }