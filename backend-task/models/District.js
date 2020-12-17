const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const districtSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  state_id: {
    type: Number,
    required: true
  },
  district_name: {
    type: String,
    required: true,
    max: 200,
    min: 5,
    
  }
},
{ versionKey: false }
);

module.exports = mongoose.model('District', districtSchema)