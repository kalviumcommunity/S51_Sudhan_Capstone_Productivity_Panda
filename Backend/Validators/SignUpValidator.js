// Importing Joi for input validation
const Joi = require('joi');

// Defining schema for sign-up input validation
const signUpValidator = Joi.object({
    Username: Joi.string().min(3).max(20).required().label('Username'), // Username validation
    Email: Joi.string().allow('').required().label('Email'), // Email validation
    Password: Joi.string().min(6).max(12).required().label("Password") // Password validation
})

// Function to validate sign-up data
const ValidatingSignUp = (data) => {
    // Validate the input data against the defined schema
    return signUpValidator.validate(data, { abortEarly: false }) // Abort early to show all validation errors
}

// Exporting the validation function to be used in other modules
module.exports = ValidatingSignUp;
