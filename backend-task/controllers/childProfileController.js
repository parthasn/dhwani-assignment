const ChildProfile = require('../models/ChildProfile');
let childprofilesArr = require('../childProfiles')



const getChildProfiles = async (req, res) => {
    await ChildProfile.find()
    .then((childProfiles) => res.json({success: true, status: 200, message: "Child Profile Detail", timestamp: Date.now(), child_profile: childProfiles}))
    
    .catch((err) => res.status(400).json("Error: " + err))
}

const addChildProfile = async (req, res) => {
    const _id = childprofilesArr.length+1
    const { district_id, name, sex, dob, father_name, mother_name, photo } = req.body;
    console.log(req.body)
    await ChildProfile.find({name: name})
    .then((childProfiles) => {
        if(childProfiles.length === 0){
            const newStateChildProfile = new ChildProfile({ _id, district_id, name, sex, dob, father_name, mother_name, photo});  
            childprofilesArr.push(newStateChildProfile)
            console.log(childprofilesArr)
            newStateChildProfile
                .save()
                .then(() => res.json({success: true, status: 200, message: "Child Profile Added Successfully"}))
                .catch((err) => res.status(400).json("Error: " + err));
        } 
        else
            res.json({success: false, status: 200, message: "Child Profile already exists"})
        return;
    })
    .catch((err) => res.status(400).json("Error: " + err));
    
}

module.exports = { getChildProfiles, addChildProfile }