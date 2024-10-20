const express = require('express');
const router = express.Router();

const {handleUserSuggestion} = require("../controllers/us_usersuggest")

router.get('/', (req, res) => {
    res.send({ status: "User Suggestion is running" });
});

router.post('/suggestion',handleUserSuggestion);

module.exports = router