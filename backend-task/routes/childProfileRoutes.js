const express = require("express");
const router = express.Router();
const { getChildProfiles, addChildProfile  } = require('../controllers/childProfileController')

router.post("/addChildProfile", addChildProfile)
router.get("/getChildProfiles", getChildProfiles)

module.exports = router;