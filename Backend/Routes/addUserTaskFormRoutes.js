const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const addTaskFormValidator = require("../Validators/AddTaskFormValidator")
require("dotenv").config(); // Load environment variables from .env file
const authenticateToken = require("../middleware/authMiddleware")
const Task = require("../models/userAddTaskDetails")
const { updateTask } = require('../controllers/taskController');

// Define a POST route for adding a task form
Router.post('/api/addtask', authenticateToken, async (req, res) => {
    // const { error, value } = addTaskFormValidator.validate(req.body, { abortEarly: false });

    // if (error) {
    //   return res.status(400).send({
    //     message: `Bad request, error:${error}`
    //   });
    // }

    try {
        let { EventName, Description, Date, Status, DurationHours, DurationMinutes } = req.body;
        const { userID } = req.body;

        const addTask = await Task.create({ EventName, Description, Date, Status, DurationHours, DurationMinutes, userID: userID });
        res.status(201).json(addTask);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

Router.get('/api/getalltask', authenticateToken, async (req, res) => {
    try {
        console.log('Request received in route handler.');
        // Destructure userID directly from req.body
        const { userID } = req.body;

        // Log the userID for debugging purposes
        console.log('UserID received in route handler:', userID);

        // Fetch all tasks and filter based on userID
        const getTask = await Task.find();
        const filteredTask = getTask.filter((taskcontainer) => taskcontainer.userID.toString() === userID);

        // Send the filtered tasks in the response
        res.status(200).json(filteredTask);
    } catch (err) {
        console.error('Internal server error:', err);
        return res.status(500).send({ message: `Internal server error: ${err.message}` });
    }
});

Router.delete('/api/deletetasks/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { "_id": id }
        const deleteTask = await Task.findOneAndDelete(filter);
        if (!deleteTask) {
            return res.status(404).send({ message: "Task not found" });
        }
        res.status(200).json(deleteTask);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


// Router.patch('/api/updatetask/:id', authenticateToken, updateTask);


module.exports = Router; // Export the router object to be used in other parts of the application
