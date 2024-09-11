const express = require('express');
const router = express.Router();

const {handleUserComplains} = require("../controllers/us_usercomplain")

router.get('/', (req, res) => {
    res.send({ status: "Server is running" });
});

router.post('/usercomplain',handleUserComplains);

module.exports = router