const mongoose = require("mongoose");

// Define a new Mongoose schema for storing user task details.
const ppDBUserTaskDetails = new mongoose.Schema({
  EventName: { type: String, required: true, maxLength: 50 },
  Description: { type: String, required: true, maxLength: 200 },
  Date: { type: Date, required: true },
  Status: { type: String, enum: ['Must do', 'Awaiting', 'Pending'], required: true },
  DurationHours: { type: Number, default: 0, min: 0 },
  DurationMinutes: { type: Number, default: 0, min: 0 },
  userID: { type: String, required: true }
});

// Create a Mongoose model using the defined schema.
const Task = mongoose.model("userTaskFormDetails", ppDBUserTaskDetails);

// Export the Mongoose model so it can be used in other parts of the application.
module.exports = Task;
