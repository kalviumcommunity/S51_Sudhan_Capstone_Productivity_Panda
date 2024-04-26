const express = require("express")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken");
const userDetailsModel = require("../models/userDetails");
const ValidatingSignUp = require("../Validators/SignUpValidator"); // Custom validation function
require('dotenv').config();


const SignUpRegisteringRoute = express.Router()

// Route for user registration
SignUpRegisteringRoute.post("/Sign-Up", async (req, res) => {
    try {
        // Validate the request body using a custom validator
        const { error } = ValidatingSignUp(req.body);
          if (error) {
            return res.status(400).json({ error: error.details.map(detail => detail.message) });
        }

        // Check if the email already exists in the database
        const existingEmail = await userDetailsModel.findOne({ Email: req.body.Email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email is already exist" });
        }

        // Check if the username already exists in the database
        const existingUsername = await userDetailsModel.findOne({ Username: req.body.Username });
        if (existingUsername) {
            return res.status(400).json({ error: "Username is already exist" });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(req.body.Password, 10); // 10 is the saltRounds

        // Create a new user object with the provided details
        const newUser = new userDetailsModel({
            Username: req.body.Username,
            Email: req.body.Email,
            Password: hashedPassword
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Generate a JWT token for the newly registered user
        const token = JWT.sign({ userID: savedUser._id }, process.env.SECRET_KEY, {
            expiresIn: "1h" // Token expires in 1 hour
        });

        // Respond with a success message and the JWT token
        res.status(201).json({ message: "User registered successfully", token });
    } catch (err) {
        // Handle any unexpected errors
        console.error("Error registering user:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Export the RegisterRoute for use in other files
module.exports = SignUpRegisteringRoute;
