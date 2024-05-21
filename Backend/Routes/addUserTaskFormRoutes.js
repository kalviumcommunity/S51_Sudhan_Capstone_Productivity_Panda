const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const UserTaskFormSchemaValidating = require("../models/userAddTaskDetails"); // Import the UserTaskForm schema for validation
require("dotenv").config(); // Load environment variables from .env file

// Define a POST route for adding a task form
Router.post("/addTaskForm", async (req, res) => {
    try {
        // Destructure the request body to get task details
        const { EventName, Description, Date, Time, Status, Priority } = req.body;

        // Check if a task with the same EventName and Time already exists
        let existingAddTaskFormDetails = await UserTaskFormSchemaValidating.findOne({ EventName: EventName, Time: Time });

        if (!existingAddTaskFormDetails) {
            // Create a new task if no existing task is found
            const newTask = new UserTaskFormSchemaValidating({
                EventName: EventName,
                Description: Description,
                Date: Date,
                Time: Time,
                Status: Status,
                Priority: Priority,
            });
            await newTask.save(); // Save the new task to the database
            console.log(newTask); // Log the new task

            // Send a success response
            res.status(201).json({ message: "User Added Task Successfully" });
        } else {
            // Send a response indicating the task already exists
            res.status(200).json({ message: "User EventName already exists and can't add the task when another task is in progress" });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error in EventName and Timing", error); // Log the error
        res.status(500).json({ error: "Internal Server Error" }); // Send an error response
    }
});

module.exports = Router; // Export the router object to be used in other parts of the application
