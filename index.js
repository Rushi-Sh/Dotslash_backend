const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Signup = require("./routes/us_signup");
const { connectMongoDb } = require("./Connection");
const PersonalPost = require("./routes/us_personalpost");
const Login = require("./routes/us_login");
const HomeScreen = require("./routes/us_homescreen");
const UserComplain = require("./routes/us_usercomplain");

connectMongoDb("mongodb+srv://urbansnap05:urbansnap23@cluster0.juzsqhc.mongodb.net/UserDetails?retryWrites=true&w=majority&appName=Cluster0");

app.use(bodyParser.json());
app.use("/signup", Signup);
app.use("/personalpost", PersonalPost);
app.use("/login", Login);
app.use("/homescreen", HomeScreen);
app.use("/usercomplain", UserComplain);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
