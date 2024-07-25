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
const taskRoutes = require("./Routes/taskRoutes")
const userDetailsModel = require("./models/userDetails");
const authMiddleware = require("./middleware/authMiddleware");

// Create an instance of the Express application
const app = express();  

// Set up middleware
app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors()); // Enable CORS to allow requests from different origins
app.use(bodyParser.json()); // Middleware for parsing JSON bodies

// Using imported routes for handling different API endpoints
app.use("/",SignUpRegisteringRoute); // Using sign-up/register route
app.use(LoginInRoute); // Using login route
app.use(GoogleSignupRoutes); // Using Google sign-up route
app.use("/api",taskRoutes)
app.use("/", addTaskForm); // Using add task form route
// Add this route to your existing user routes file
app.get('/api/user/me', authMiddleware ,async (req, res) => {
    try {       
      const user = await userDetailsModel.findById(req.body.userID);
      console.log(user)
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json({
        Username: user.Username,
        Email: user.Email,
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// Set the port for the server to listen on
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set in environment variables

// Connect to MongoDB using the provided URL
mongoose.connect(process.env.MongoURL) // Added options to avoid deprecation warnings
    .then(() => console.log('MongoDB connected...')) // Log success message on successful connection
    .catch(err => console.error('MongoDB connection error:', err)); // Log error message on connection failure

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`); // Log the port the server is running on
});
