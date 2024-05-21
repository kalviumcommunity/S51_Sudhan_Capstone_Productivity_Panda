// Importing necessary modules for building the server
const express = require("express"); // Express.js framework for building web applications
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling (corrected spelling from 'monogoose' to 'mongoose')
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware
const bodyParser = require("body-parser"); // Body parsing middleware
require('dotenv').config(); // dotenv for environment variables

// Importing routes for handling user authentication and task management
const GoogleSignupRoutes = require("../Backend/Routes/googleSigninRoutes");
const LoginInRoute = require("../Backend/Routes/LoginRoute");
const SignUpRegisteringRoute = require("../Backend/Routes/SignUpRegisteredRoute");
const addTaskForm = require("./Routes/addUserTaskFormRoutes");

// Create an instance of the Express application
const app = express();  

// Set up middleware
app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors()); // Enable CORS to allow requests from different origins
app.use(bodyParser.json()); // Middleware for parsing JSON bodies

// Using imported routes for handling different API endpoints
app.use(SignUpRegisteringRoute); // Using sign-up/register route
app.use(LoginInRoute); // Using login route
app.use(GoogleSignupRoutes); // Using Google sign-up route
app.use("/", addTaskForm); // Using add task form route

// Set the port for the server to listen on
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set in environment variables

// Connect to MongoDB using the provided URL
mongoose.connect(process.env.MongoURL, { useNewUrlParser: true, useUnifiedTopology: true }) // Added options to avoid deprecation warnings
    .then(() => console.log('MongoDB connected...')) // Log success message on successful connection
    .catch(err => console.error('MongoDB connection error:', err)); // Log error message on connection failure

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`); // Log the port the server is running on
});
