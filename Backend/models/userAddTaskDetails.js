const mongoose = require("mongoose");

// Define a new Mongoose schema for storing user task details.
const ppDBUserTaskDetails = new mongoose.Schema({
    // Field to store the name of the event.
    EventName: { type: String, required: true },
    // Field to store the description of the event/task.
    Description: { type: String, required: true },
    // Field to store the date of the event/task in YYYY-MM-DD format.
    Date: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ },
    // Field to store the time of the event/task in HHMM format.
    Time: { type: Number, required: true, min: 0, max: 1440 },
    // Field to store the status of the event/task (e.g., completed, pending).
    Status: { type: String, required: true },
    // Field to store the priority of the event/task (e.g., high, medium, low).
    Priority: { type: String, required: true }
});

// Create a Mongoose model using the defined schema.
const userAddTaskDetailsModel = mongoose.model("userTaskFormDetails", ppDBUserTaskDetails);

// Export the Mongoose model so it can be used in other parts of the application.
module.exports = userAddTaskDetailsModel;
