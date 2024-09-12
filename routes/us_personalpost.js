const express = require("express")

const router = express.Router()

const {handlePersonalPost} = require("../controllers/us_personalpost")

router.get('/', (req, res) => {
    res.send({ status: "Personal Post Started" });
});

router.post('/userpost',handlePersonalPost);

module.exports = router