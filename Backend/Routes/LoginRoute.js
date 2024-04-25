const express = require("express")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken");
const userDetailsModel = require("../models/userDetails");
require('dotenv').config();


const LoginInRoute = express.Router()
LoginInRoute.post("/log-in", async (req, res) => {
    const { Email, Password } = req.body
    try {
        const userEmailID = await userDetailsModel.findOne({ Email })
        console.log(userEmailID, "from 13")
        if (!userEmailID) {
            return res.status(404).json({ Error: "Email ID wasn't found" })
        }
        const userPassword = await bcrypt.compare(Password, userEmailID.Password);
        if (!userPassword) {
            return res.status(400).json({ Error: "Please Enter valid password" })
        }
        console.log(userPassword)
        // Generate a JWT token for the newly registered user
        const token = JWT.sign({ userID: userDetailsModel._id }, process.env.SECRET_KEY, {
            expiresIn: "1h" // Token expires in 1 hour
        });
        // Respond with a success message and the JWT token
        res.status(200).json({ message: "User Loged-In successfully", token });
    } catch {
        console.error("There is no account please sign-up to get seamless userExperience.")
    }
})

module.exports = LoginInRoute