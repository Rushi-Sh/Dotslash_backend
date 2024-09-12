const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");

const url = `https://urban-snap-app-modified-backend.onrender.com/`; 
const interval = 30000; 

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);

const app = express();

const Signup = require("./routes/us_signup");
const { connectMongoDb } = require("./Connection");
const PersonalPost = require("./routes/us_personalpost");
const Login = require("./routes/us_login");
const HomeScreen = require("./routes/us_homescreen");

connectMongoDb("mongodb+srv://urbansnap05:urbansnap23@cluster0.juzsqhc.mongodb.net/UserDetails?retryWrites=true&w=majority&appName=Cluster0");

app.use(bodyParser.json());
app.use("/signup", Signup);
app.use("/personalpost", PersonalPost);
app.use("/login", Login);
app.use("/homescreen", HomeScreen);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
