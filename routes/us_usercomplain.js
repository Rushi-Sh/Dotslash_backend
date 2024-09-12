const express = require('express');
const router = express.Router();

const {handleUserComplains} = require("../controllers/us_usercomplain")

router.get('/', (req, res) => {
    res.send({ status: "User Complain is running" });
});

router.post('/usercomplain',handleUserComplains);

module.exports = router