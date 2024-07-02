const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const taskService = require('../services/TaskService')
const addTaskFormValidator = require("../Validators/AddTaskFormValidator")
require("dotenv").config(); // Load environment variables from .env file


// Define a POST route for adding a task form
Router.post('/create-task/:userId', async (req, res) => {
  const { userId } = req.params;
  const { error } = addTaskFormValidator.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  const taskData = req.body;

  try {
    const task = await taskService.createTaskForUser(userId, taskData);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

Router.get("/user-with-task/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await taskService.getUserWithTask(userId);
    console.log("Able to get the task:", user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching tasks", error); // Log the error
    res.status(500).json({ error: error.message }); // Send an error response
  }
});

Router.patch('/update-task/:userId/:taskId', async (req, res) => {
  const { userId, taskId } = req.params;
  const { error } = addTaskFormValidator.validate(req.body);  // Validate request body
  if (error) return res.status(400).json({ error: error.details[0].message });
  const taskData = req.body;

  try {
    const task = await taskService.updateTaskForUser(userId, taskId, taskData);
    console.log("Able to update the task:", task);
    res.status(200).json(task);
  } catch (error) {
    console.error("There is a error in updating the task", error);
    res.status(500).json({ error: error.message });
  }
})

Router.delete("/delete-Task/:userId/:taskId", async (req, res) => {
  const { userId, taskId } = req.params;


  try {
    const task = await taskService.deleteTaskForUser(userId, taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
    console.log("Task is deleted successfully:", task)
  }
  catch (error) {
    res.status(500).json({ message: 'Error deleting task', error })
  }
})

module.exports = Router; // Export the router object to be used in other parts of the application
