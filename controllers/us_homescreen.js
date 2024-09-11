const Complain = require("../models/UserPost")

async function handleAllPost(req,res){
    try {

        const existingUser = await Complain.find();
        console.log(existingUser)

        if (!existingUser) {
            return res.status(400).json({ error: "Data does not exists!" });
        }

        res.status(201).json({ status: "ok", data: existingUser});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

async function handleComplainType(req,res){
    const {reportType} = req.body
    
    try {

        const complainTypeData = await Complain.find({
            complainType:reportType
        });
        console.log(complainTypeData)

        if (!complainTypeData) {
            return res.status(400).json({ error: "Data does not exists!" });
        }

        res.status(201).json({ status: "ok", data: complainTypeData});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

async function handleDate(req,res){
    const {date} = req.body
    
    try {

        const complainTypeData = await Complain.find({
            date:date
        });
        console.log(complainTypeData)

        if (!complainTypeData) {
            return res.status(400).json({ error: "Data does not exists!" });
        }

        res.status(201).json({ status: "ok", data: complainTypeData});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleAllPost,
    handleComplainType,
    handleDate
}