const express = require("express");
const router = express.Router();
const { addState, getStates } = require('../controllers/stateController')

router.post("/addState", addState)
router.get("/getStates", getStates)

module.exports = router;