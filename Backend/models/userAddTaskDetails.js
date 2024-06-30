const mongoose = require("mongoose");

// Define a new Mongoose schema for storing user task details.
const ppDBUserTaskDetails = new mongoose.Schema({
    // Field to store the name of the event.
    EventName: { type: String, required: true, maxLength: 50 },
    // Field to store the description of the event/task.
    Description: { type: String, required: true, maxLength: 200 },
    // Field to store the date of the event/task in YYYY-MM-DD format.
    Date: { type: Date, required: true },
    // Field to store the status of the event/task (e.g., must do, awaiting, pending).
    Status: { type: String, enum: ['Must do', 'Awaiting', 'Pending'], required: true },
    // Fields to store the duration of the event/task in hours and minutes.
    DurationHours: { type: Number, default: 0, min: 0 },
    DurationMinutes: { type: Number, default: 0, min: 0 }
});

// Create a Mongoose model using the defined schema.
const userAddTaskDetailsModel = mongoose.model("userTaskFormDetails", ppDBUserTaskDetails);

// Export the Mongoose model so it can be used in other parts of the application.
module.exports = userAddTaskDetailsModel;
