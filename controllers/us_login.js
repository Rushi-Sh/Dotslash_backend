const User = require("../models/UserDetails")
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const generateJWTSecret = () =>{
    return crypto.randomBytes(32).toString('hex')
}

let JWT_SECRET = generateJWTSecret();


const rotateJWTSecret = () => {
    JWT_SECRET = generateJWTSecret();
    console.log("JWT Secret rotated.");
};

rotateJWTSecret();
setInterval(rotateJWTSecret, 7 * 24 * 60 * 60 * 1000);


async function handleUserLogin(req,res){
    const { username,password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ error: "Email and password verification required!" });
        }

        const existingUser = await User.findOne({
            username: username,
            password: password
        });

        if (!existingUser) {
            return res.status(400).json({ error: "User does not exists!" });
        }

        const token = jwt.sign({
            username: existingUser.username,
            password: existingUser.password
        },JWT_SECRET)

        res.status(201).json({ status: "ok", data: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

async function handleUserData(req,res){
    const {token} = req.body;

    console.log(token,',',JWT_SECRET)
    try{
        const user = jwt.verify(token,JWT_SECRET)
        console.log(user)
        const uname = user.username;
        const pass = user.password

        const veri = await User.findOne({
            username : uname,
            password : pass
        })

        if (!veri) {
            return res.status(400).json({ error: "User does not exists!" });
        }

        res.status(201).json({ status: "ok", data: veri });

    }catch(e){
        console.log(e);
    }
}

module.exports = {
    handleUserLogin,
    handleUserData
}