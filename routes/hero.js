const express = require("express");


// import controller
const {getHeroes} =require('../controllers/heroController')
const router = express.Router();



router.get("/heroes", getHeroes);






module.exports = router;