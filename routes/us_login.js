const express = require('express');
const router = express.Router()
const {handleUserLogin,handleUserData} = require("../controllers/us_login")


router.post('/login', handleUserLogin);
router.post('/userdata',handleUserData);

module.exports = router