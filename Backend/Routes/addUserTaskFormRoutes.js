const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const UserTaskFormSchemaValidating = require("../models/userAddTaskDetails"); // Import the UserTaskForm schema for validation
const userAddTaskDetailsModel = require("../models/userAddTaskDetails");
require("dotenv").config(); // Load environment variables from .env file

// Define a POST route for adding a task form
Router.post('/addTaskForm', async (req, res) => {
    try {
      const { EventName, Description, Date, Status, DurationHours, DurationMinutes } = req.body;
  
      // Validate input data
      if (!EventName || !Description || !Date || !Status) {
        return res.status(400).json({ error: 'EventName, Description, Date, and Status are required' });
      }
  
      // Create a new task
      const newTask = new UserTaskFormSchemaValidating({
        EventName,
        Description,
        Date,
        Status,
        DurationHours,
        DurationMinutes
      });
  
      // Save the task to the database
      const savedTask = await newTask.save();
  
      // Respond with the saved task
      res.status(201).json({ task: savedTask });
    } catch (error) {
      console.error('Error adding task:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

Router.get("/tasks", async (req, res) => {
    try {
        const tasks = await UserTaskFormSchemaValidating.find({});
        console.log("Good to go cheif");
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks", error); // Log the error
        res.status(500).json({ error: "Internal Server Error" }); // Send an error response
    }
});

Router.delete("/deleteTask/:id", async(req, res)=> {
    try{
        const taskID  = req.params.id;
        await userAddTaskDetailsModel.findByIdAndDelete(taskID);
        res.status(200).json({ message: 'Task deleted successfully'});
    }
    catch (error){
        res.status(500).json({message: 'Error deleting task', error})
    }
})

module.exports = Router; // Export the router object to be used in other parts of the application
