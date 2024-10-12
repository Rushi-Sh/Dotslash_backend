const NewsPost = require("../models/News")

async function handleNewsUpload(req, res) {
    const { 
        title,
        desc,
        newsType,
        complainType,
        date,
        time,
        imgUrl } = req.body;

    console.log("Received complain data:", {
        title,
        desc,
        newsType,
        complainType,
        date,
        time,
        imgUrl
    });

    try {
        const newNews = new NewsPost({
            title: title,
            image: imgUrl,
            newsType: newsType,
            description: desc,
            date: date,
            time: time,
            complainType: complainType,
            empId:"Admin"
        });

        await newNews.save();
        res.status(201).json({ status: "ok", data: "News Posted"});

    } catch (error) {
        console.error("Error posting News:", error);
        res.status(500).json({ error: "Server error" });
    }
}

async function handleNewsPost(req,res){

    try {

        const NewsPost = await News.find();
        console.log(NewsPost)

        if (!NewsPost) {
            return res.status(400).json({ error: "Data does not exists!" });
        }

        res.status(201).json({ status: "ok", data: NewsPost});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


module.exports = {
    handleNewsUpload,
    handleNewsPost
}