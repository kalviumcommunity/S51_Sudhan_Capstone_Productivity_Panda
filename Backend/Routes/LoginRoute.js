// Importing necessary modules for creating the login route
const express = require("express");
const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing and comparison
const JWT = require("jsonwebtoken"); // Importing jsonwebtoken for creating JWT tokens
const userDetailsModel = require("../models/userDetails"); // Importing the user details model
require('dotenv').config(); // Loading environment variables from .env file

// Creating a router for login route
const LoginInRoute = express.Router();

// Handling POST requests to the '/log-in' endpoint
LoginInRoute.post("/log-in", async (req, res) => {
    // Destructuring email and password from the request body
    const { Email, Password } = req.body;
    try {
        // Finding user details by email in the database
        const userEmailID = await userDetailsModel.findOne({ Email });
        console.log(userEmailID, "from 13"); // Logging the found user details

        // If user with given email is not found, return a 404 error
        if (!userEmailID) {
            return res.status(404).json({ Error: "Email ID wasn't found" });
        }
        console.log(userEmailID , Password)
        // Comparing the entered password with the stored hashed password
        const userPassword = await bcrypt.compare(Password, userEmailID.Password);

        // If passwords don't match, return a 400 error
        console.log(userPassword); // Logging the result of password comparison
        if (!userPassword) {
            return res.status(400).json({ Error: "Please Enter valid password" });
        }
        console.log(userPassword); // Logging the result of password comparison

        // Generate a JWT token for the user
        const token = JWT.sign({ userID: userEmailID._id }, process.env.SECRET_KEY, {
            expiresIn: "2h" // Token expires in 2 hour
        });
        console.log("Token expired:", token);

        // Respond with a success message and the JWT token
        res.status(200).json({ message: "User Logged-In successfully", token });
    } catch (error) {
        // If an error occurs during the process, log it and send a 500 error response
        console.error("There is no account please sign-up to get seamless user experience.", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Exporting the login route to be used in other modules
module.exports = LoginInRoute;