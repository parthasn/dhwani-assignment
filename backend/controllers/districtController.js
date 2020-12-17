const District = require('../models/District');
let districtsArr = require('../districts')



const getDistricts = async (req, res) => {
    const { state_id }= req.query
    await District.find({state_id: state_id})
    .then((districts) => 
    res.json({success: true, status: 200, message: "District Detail", timestamp: Date.now(), district: districts.map((district) => {return {id: district._id, district_name: district.district_name}})}))
    
    .catch((err) => res.status(400).json("Error: " + err))
}

const addDistrict = async (req, res) => {
    const _id = await District.collection.count() + 1;
    const { state_id, district_name } = req.body;
    console.log(req.body)
    await District.find({district_name: district_name})
    .then((districts) => {
        console.log("test districts",districts);
        if(districts.length === 0){
            const newDistrict = new District({ _id, state_id, district_name });  
            districtsArr.push(newDistrict)
            console.log(districtsArr)
            newDistrict
                .save()
                .then(() => res.json({success: true, status: 200, message: "District Added Successfully"}))
                .catch((err) => res.status(400).json("Error: " + err));
        } 
        else
            res.json({success: false, status: 200, message: "District name already exists"})
        return;
    })
    .catch((err) => res.status(400).json("Error: " + err));
    
}

module.exports = { getDistricts, addDistrict }