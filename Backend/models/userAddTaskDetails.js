// Define a new Mongoose schema for storing user task details.
const ppDBUserTaskDetails = new mongoose.Schema({
    // Field to store the name of the event.
    Eventname: String,
    // Field to store the description of the event/task.
    Description: String,
    // Field to store the date of the event/task.
    Date: Number,
    // Field to store the time of the event/task.
    Time: Number,
    // Field to store the status of the event/task (e.g., completed, pending).
    Status: String,
    // Field to store the priority of the event/task (e.g., high, medium, low).
    Priority: String
})

// Create a Mongoose model using the defined schema.
const userAddTaskDetailsModel = mongoose.model("userDetails", ppDBUserTaskDetails);

// Export the Mongoose model so it can be used in other parts of the application.
module.exports = userAddTaskDetailsModel;
