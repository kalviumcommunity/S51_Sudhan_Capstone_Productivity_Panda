const express = require("express"); // Express.js framework for building web applications
const monogoose = require("mongoose"); // Mongoose for MongoDB object modeling
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware
const Jwt = require("jsonwebtoken"); // JSON Web Token implementation
const bcrypt = require("bcryptjs"); // bcrypt for hashing passwords
const bodyParser = require("body-parser"); // Body parsing middleware
require('dotenv').config(); // dotenv for environment variables
const ValidatingSignUp = require("../Backend/Validators/SignUpValidator"); // Custom validation function
const userDetailsModel = require("../Backend/models/userDetails"); // Model for user details
const LoginInRoute = require("./Routes/LoginRoute");

// Create an instance of the Express application
const RegisterRoute = express();

// Set up middleware
RegisterRoute.use(express.json()); // JSON parsing
RegisterRoute.use(cors()); // Enable CORS
RegisterRoute.use(bodyParser.json()); // JSON body parsing
RegisterRoute.use(LoginInRoute)

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Connect to MongoDB using the provided URL
monogoose.connect(process.env.MongoURL);

// Route for user registration
RegisterRoute.post("/Sign-Up", async (req, res) => {
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
        const token = Jwt.sign({ userID: savedUser._id }, process.env.SECRET_KEY, {
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

RegisterRoute.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

// Export the RegisterRoute for use in other files
module.exports = RegisterRoute;
