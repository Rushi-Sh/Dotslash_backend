const express = require('express');
const router = express.Router();

const {handleNewsUpload,handleNewsPost} = require("../controllers/us_usernews")

router.get('/', (req, res) => {
    res.send({ status: "News Section is running" });
});

router.post('/newsupload',handleNewsUpload);
router.post('/newspost',handleNewsPost);

module.exports = router