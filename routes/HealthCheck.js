const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ status: "Api is upto date!!!❤️❤️❤️" });
});


module.exports = router