const User = require("../models/UserDetails")

async function handleUserFind(req,res,next){
    
    const { email, password } = req.body;

    console.log(email, password);

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists!" });
        } else {
            req.emailForRegistration = email;
            req.passwordForRegistration = password;
            next();
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }

}

async function handleUserPhone(req,res,next){
    
    const { phone } = req.body;

    console.log(phone);

    try {
        const existingUser = await User.findOne({ phone: phone });
        if (existingUser) {
            return res.status(400).json({ error: "User with this phone number already exists!" });
        } else {
            req.phoneForRegistration = phone;
            next();
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }

}

async function handleUserRegister(req,res){

    const { username,fullname,pincode,selectedLocality,email,password,phone,district,state,country} = req.body;

    console.log(
        username,
        fullname,
        pincode,
        selectedLocality,
        email,
        password,
        phone,
        district,
        state,
        country
    );

    try {
        if (!email || !phone || !password) {
            return res.status(400).json({ error: "Email, phone, and password verification required!" });
        }

        const existingUser = await User.findOne({
            username: username,
            fullname: fullname,
            email: email,
            phone: phone,
            password: password, 
            pincode: pincode,
            locality: selectedLocality,
            district: district,
            state: state,
            country: country
        });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists!" });
        }


        await User.create({
            username: username,
            fullname: fullname,
            email: email,
            phone: phone,
            password: password, 
            pincode: pincode,
            locality: selectedLocality,
            district: district,
            state : state,
            country : country
        });

        res.status(201).json({ status: "ok", data: "User Created" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }

}

module.exports={
    handleUserFind,
    handleUserPhone,
    handleUserRegister
}