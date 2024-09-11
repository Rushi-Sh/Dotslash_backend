const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// const mongoUrl = "mongodb+srv://urbansnap05:urbansnap23@cluster0.juzsqhc.mongodb.net/UserDetails?retryWrites=true&w=majority";

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((e) => {
//         console.error("MongoDB connection error:", e);
//     });

// require('./News');
// const Complain = mongoose.model("News");

app.post('/newspost', async (req, resp) => {

    // const { userName, userID } = req.body;

    // try {
    //     if (!userName || !userID) {
    //         return resp.status(400).json({ error: "User Credentials not provided!" });
    //     }

    //     const existingUser = await Complain.find({
    //         username: userName,
    //         uid: userID
    //     });

    //     if (!existingUser) {
    //         return resp.status(404).json({ error: "User does not exist!" });
    //     }

    //     resp.status(200).json({ status: "ok", data: existingUser });
    // } catch (err) {
    //     console.error("Error fetching user post:", err);
    //     resp.status(500).json({ error: "Server error" });
    // }
});

// const PORT = process.env.PORT || 5004;



// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
