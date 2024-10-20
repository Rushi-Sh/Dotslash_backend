const Suggestion = require("../models/Suggestion")

async function handleUserSuggestion(req, res) {
    const { rate,functions,challenges,userID } = req.body;

    console.log("Received suggestion data:", {
    rate,functions,challenges,userID
    });

    try {
        const newSuggestion = new Suggestion({
            rate:rate,
            positives:functions,
            negatives:challenges,
            userId:userID
        });

        await newSuggestion.save();
        res.status(201).json({ status: "ok", data: "Suggestion Noted"});

    } catch (error) {
        console.error("Error posting Suggestion:", error);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleUserSuggestion
}