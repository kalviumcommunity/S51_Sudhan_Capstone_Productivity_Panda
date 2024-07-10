const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const jwt = require("jsonwebtoken"); // Import the jsonwebtoken module
const UserSchemaModelChecking = require("../models/userDetails"); // Import the User schema for checking user details
require("dotenv").config(); // Load environment variables from .env file

// Define a POST route for Google signup
Router.post("/GoogleSignupRoutes", async (req, res) => {
  try {
    // Destructure the request body to get user details
    const { name, email, profile } = req.body;

    // Check if a user with the provided email already exists
    let existingUser = await UserSchemaModelChecking.findOne({ Email: email });
    let token; // Variable to hold the JWT token

    if (!existingUser) {
      // Create a new user if no existing user is found
      const newUser = new UserSchemaModelChecking({
        Username: name,
        Email: email,
        Password: null, // No password since it's a Google signup
        Profile: profile,
      });

      await newUser.save(); // Save the new user to the database
      console.log(newUser); // Log the new user

      // Generate a JWT token for the new user
      token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);

      // Send a success response with the token
      res.status(201).json({ message: "User registered successfully", token });
    } else {
      // Generate a JWT token for the existing user
      token = jwt.sign({ userID: existingUser._id }, process.env.SECRET_KEY);

      // Send a response indicating the user already exists, with the token
      res.status(200).json({ message: "User already exists", token });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error signing up or logging in:", error); // Log the error
    res.status(500).json({ error: "Internal server error" }); // Send an error response
  }
});

module.exports = Router; // Export the router object to be used in other parts of the application
