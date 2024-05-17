const Joi = require('joi');

// Custom validation function to check if the provided date is in the future
const UserCurrentDateMonthYearValidation = (value, helper) => {
    const currentDate = new Date(); // Get current date
    const FutureDate = new Date(value); // Convert provided value to a Date object

    // Check if the provided date is greater than or equal to the current date
    if(FutureDate >= currentDate){
        return value; // If validation passes, return the provided value
    } else {
        return helper.message("Date Month Year should be greater than or equal to current time"); // If validation fails, return a custom error message
    }
}

// Joi validation schema for the user input
const addTaskFormValidator = Joi.object({
    // Validation for the event name field
    Eventname: Joi.string().min(10).max(30).required().label("EventName"),

    // Validation for the description field
    Description: Joi.string().min(15).max(60).required().label("Description"),

    // Custom validation for the date field using the provided function
    Date: Joi.date().required().custom(UserCurrentDateMonthYearValidation),

    // Validation for the time field
    Time: Joi.number().integer().min(0).max(2359).required().label("Time"),

    // Validation for the status field
    Status: Joi.string().valid('To-do', 'Paused', 'In-Progress').label("Status"),

    // Validation for the priority field
    Priority: Joi.string().valid('High', 'Medium', 'Low').required().label("Priority")
})

module.exports = addTaskFormValidator;
