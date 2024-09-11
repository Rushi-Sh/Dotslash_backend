const express = require("express")

const router = express.Router()

const {handlePersonalPost} = require("../controllers/us_personalpost")

router.post('/userpost',handlePersonalPost);

module.exports = router