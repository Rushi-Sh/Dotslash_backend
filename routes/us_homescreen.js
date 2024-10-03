const express = require('express');
const router = express.Router();

const {handleAllPost,handleComplainType,handleDate,handlePredictedData} = require("../controllers/us_homescreen")

router.get('/', (req, res) => {
    res.send({ status: "HomeScreen Started" });
});

router.post('/allpost',handleAllPost)

router.post('/complaintype',handleComplainType)

router.post('/date',handleDate)

router.post('/predictedcomplain',handlePredictedData)

module.exports = router