const express = require("express"); // Import the express module
const Router = express.Router(); // Create a new router object
const addTaskFormValidator = require("../Validators/AddTaskFormValidator")
require("dotenv").config(); // Load environment variables from .env file
const authenticateToken = require("../middleware/authMiddleware")
const Task = require("../models/userAddTaskDetails")

// Define a POST route for adding a task form
Router.post('/api/addtask', authenticateToken, async (req, res) => {
    const { error, value } = addTaskFormValidator.validate(req.body, { abortEarly: false });
  
    if (error) {
      return res.status(400).send({
        message: `Bad request, error:${error}`
      });
    }
  
    try {
      let { EventName, Description, Date, Status, DurationHours, DurationMinutes } = req.body;
      const {userID} = req.body;  // Get userID from the request object set by authMiddleware
      console.log('userID:', userID);  // Log userID to check if it's correctly set
  
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
        let { userID } = req.body;
        // console.log("userID", userID)
        const getTask = await Task.find();
        const filteredTask = getTask.filter((taskcontainer) => {
            if(taskcontainer.userID == userID) {
                return taskcontainer
            }
        })
        console.log("printedTask", filteredTask)
        res.status(200).json(filteredTask);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}` 
        })
    }
})

Router.get('/api/gettask/:id', authenticateToken, async (req, res) => {
    try {
        const getTaskbyId = await Task.findOne({ _id: req.params.id });
        if (!getTaskbyId) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(getTaskbyId);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})


Router.patch('/api/updatetask/:id', authenticateToken, async (req, res) => {
    const { error, value } = addTaskFormValidator.validate(req.body, { abortEarly: false });

    try {
        if (!error) {
            const { id } = req.params;
            const filter = { "_id": id }
            let { EventName, Description, Date, Status, DurationHours, DurationMinutes } = req.body;
            const UpdateTask = await Task.findOneAndUpdate(filter, { EventName, Description, Date, Status, DurationHours, DurationMinutes, UserID });
            res.status(200).json(UpdateTask);
        }
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

Router.delete('/api/deleteTask/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { "_id": id }
        const DeleteTeam = await Task.findOneAndDelete(filter);
        res.status(200).json(DeleteTeam);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = Router; // Export the router object to be used in other parts of the application
