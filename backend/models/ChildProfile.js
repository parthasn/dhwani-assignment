const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const childProfileSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
    type: String,
    required: true,
    max: 200,
    min: 5
  },
  sex: {
    type: String,
    required: true,
  },
  dob: {
      type: String,
      required: true,

  },
  father_name: {
    type: String,
    required: true,
  },
  mother_name: {
        type: String,
        required: true,
  },
  district_id: {
      type: Number,
      required: true,
  },
  photo: {
      type: String,
      required: true
  },
},
{ versionKey: false }
);

module.exports = mongoose.model('ChildProfile', childProfileSchema)