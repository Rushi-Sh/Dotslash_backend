const Complain = require("../models/UserPost")

async function handleUserComplains(req, res) {
    const { Url, userid, username, reportType, loc, date, time, desc } = req.body;

    console.log("Received complain data:", {
        Url, userid, username, reportType, loc, date, time, desc
    });

    try {
        const newComplain = new Complain({
            username: username,
            image: Url,
            complainType: reportType,
            description: desc,
            issueLocation: loc,
            date: date,
            time: time,
            uid: userid
        });

        const savedComplain = await newComplain.save();
        res.status(201).json({ status: "ok", data: "Complaint Posted", complainId: savedComplain._id });

    } catch (error) {
        console.error("Error posting complaint:", error);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleUserComplains
}