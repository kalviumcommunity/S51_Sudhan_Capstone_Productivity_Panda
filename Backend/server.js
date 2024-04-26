// Importing necessary modules for building the server
const express = require("express"); // Express.js framework for building web applications
const monogoose = require("mongoose"); // Mongoose for MongoDB object modeling
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware
const bodyParser = require("body-parser"); // Body parsing middleware
require('dotenv').config(); // dotenv for environment variables

// Importing routes for handling user authentication
const LoginInRoute = require("../Backend/Routes/LoginRoute");
const SignUpRegisteringRoute = require("../Backend//Routes/SignUpRegisteredRoute");

// Create an instance of the Express application
const app = express();

// Set up middleware
app.use(express.json()); // JSON parsing
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // JSON body parsing
app.use(SignUpRegisteringRoute); // Using sign-up/register route
app.use(LoginInRoute); // Using login route

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Connect to MongoDB using the provided URL
monogoose.connect(process.env.MongoURL);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
