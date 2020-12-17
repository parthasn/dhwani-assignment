const express = require("express");
const router = express.Router();
const { getDistricts, addDistrict  } = require('../controllers/districtController')

router.post("/addDistrict", addDistrict)
router.get("/getDistricts", getDistricts)

module.exports = router;