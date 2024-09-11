const Complain = require("../models/UserPost")

async function handlePersonalPost (req,res){
    const { userName, userID } = req.body;

    try {
        if (!userName || !userID) {
            return res.status(400).json({ error: "User Credentials not provided!" });
        }

        const existingUser = await Complain.find({
            username: userName,
            uid: userID
        });

        if (!existingUser) {
            return res.status(404).json({ error: "User does not exist!" });
        }

        res.status(200).json({ status: "ok", data: existingUser });
    } catch (err) {
        console.error("Error fetching user post:", err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handlePersonalPost
}