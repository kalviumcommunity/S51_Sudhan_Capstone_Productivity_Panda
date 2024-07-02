const Joi = require('joi');

// Custom validation function to check if the provided date is in the future
const UserCurrentDateMonthYearValidation = (value, helpers) => {
    const currentDate = new Date(); // Get current date
    const FutureDate = new Date(value); // Convert provided value to a Date object

    // Check if the provided date is greater than or equal to the current date
    if (FutureDate >= currentDate) {
        return value; // If validation passes, return the provided value
    } else {
        return helpers.message("Date must be greater than or equal to the current time"); // If validation fails, return a custom error message
    }
}

// Joi validation schema for the user input
const addTaskFormValidator = Joi.object({
    // Validation for the event name field
    EventName: Joi.string().min(1).max(50).required().label("EventName"),

    // Validation for the description field
    Description: Joi.string().min(1).max(200).required().label("Description"),

    // Custom validation for the date field using the provided function
    Date: Joi.date().required().custom(UserCurrentDateMonthYearValidation),

    // Validation for the status field
    Status: Joi.string().valid('Must do', 'Awaiting', 'Pending').required().label("Status"),

    // Validation for the duration fields
    DurationHours: Joi.number().integer().min(0).default(0).label("DurationHours"),
    DurationMinutes: Joi.number().integer().min(0).default(0).label("DurationMinutes"),

    // Adding a reference to the user field
    User: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().label("User")
});

module.exports = addTaskFormValidator;
