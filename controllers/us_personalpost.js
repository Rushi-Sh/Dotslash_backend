const Complain = require("../models/UserPost")
const PredictedDetails = require("../models/PredictedDetails")

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
        else{
            const userdata = await PredictedDetails.find({
                uid: userID
            })
            return res.status(200).json({ status: "ok", data: userdata });
        }

    } catch (err) {
        console.error("Error fetching user post:", err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handlePersonalPost
}