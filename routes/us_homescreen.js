const express = require('express');
const router = express.Router();

const {handleAllPost,handleComplainType,handleDate} = require("../controllers/us_homescreen")

router.post('/allpost',handleAllPost)

router.post('/complaintype',handleComplainType)

router.post('/date',handleDate)

module.exports = router