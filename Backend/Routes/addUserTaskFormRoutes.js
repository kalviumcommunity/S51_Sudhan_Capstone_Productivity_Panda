const express = require("express");
const Router = express.Router(); // Corrected the capitalization of addTaskForm
const UserTaskFormSchemaValidating = require("../models/userAddTaskDetails");
require("dotenv").config();

Router.post("/addTaskForm", async (req, res) => {
    try {
        const { EventName, Description, Date, Time, Status, Priority } = req.body;

        // Find if there is an existing task with the same Eventname and Time
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
            await newTask.save();
            console.log(newTask);

            res.status(201).json({ message: "User Added Task Successfully" });
        } else {
            // Task with the same Eventname and Time already exists
            res.status(200).json({ message: "User EventName already exists and can't add the task when another task is in progress" });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error in EventName and Timing", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = Router;
