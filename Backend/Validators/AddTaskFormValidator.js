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
  EventName: Joi.string().min(1).max(50).required().label("EventName"),
  Description: Joi.string().min(1).max(200).required().label("Description"),
  Date: Joi.date().required().custom(UserCurrentDateMonthYearValidation),
  Status: Joi.string().valid('Must do', 'Awaiting', 'Pending').required().label("Status"),
  DurationHours: Joi.number().integer().min(0).default(0).label("DurationHours"),
  DurationMinutes: Joi.number().integer().min(0).default(0).label("DurationMinutes"),
  userID: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().label("User")
});

module.exports = addTaskFormValidator;
