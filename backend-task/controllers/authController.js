const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { loginSchema, } = require('../validation');

dotenv.config();
// To register
const register = async (req, res) => {
    let err = await registerSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try{
        let {username, email, password } = req.body

        const userWithUsernameExists = await User.find({ username });
        const userWithemailExists = await User.find({ email });
        if (userWithUsernameExists.length) {
            return res.status(400).send(`User with email id ${username} already exists`);
        }
        if (userWithemailExists.length) {
            return res.status(400).send(`User with email id ${email} already exists`);
        }

        password = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const user = new User({username, email, password})
        user
        .save()
        .then((u) => res.status(201).json({message: "User added successfully"}))
        .catch((err) => console.log(err))

        }
        catch(err){
            console.log(err)
        }
}
// To Login
const login = async (req, res) => {
    let err = await loginSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try {
        const { username } = req.body;
        console.log("username", username)
        let user = await User.findOne({ username });
        console.log("user",user)
        if (!user) {
            return res.status(400).send('Username not found');
        }

        const { password } = user;
        console.log("password", password)
        const validPassword = await bcrypt.compare(req.body.password, password);
        console.log("body", req.body.password)
        console.log("validPassowrd", validPassword)
        if (!validPassword) {
            return res.status(400).send('Invalid Password');
        }

        const tokenisedAdmin = { username };
        const accessToken = await jwt.sign(tokenisedAdmin, process.env.SECRET_KEY, {expiresIn: '3600s'});


        return res.status(200).send({ success: true, status: 200, token: accessToken,  message: "Login Successful", timestamp: Date.now() });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};
// To Logout
const logout = (req, res) => {
    res.status(200).send({success: true, status: 200, message: "Successfully logged out"})
}

module.exports = { login, logout, register };
