const express = require("express")

const router = express.Router()

const { handleUserFind, handleUserPhone, handleUserRegister } = require("../controllers/us_signup")

router.get('/', (req, res) => {
    res.send({ status: "Started" });
});

router.post('/verify/email',handleUserFind);

router.post('/verify/phone', handleUserPhone);

router.post('/register', handleUserRegister);

module.exports = router