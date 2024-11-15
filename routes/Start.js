const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ status: "Api Has Started Successfully!!!❤️❤️❤️" });
});


module.exports = router