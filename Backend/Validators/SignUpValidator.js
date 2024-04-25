const Joi = require('joi');

const signUpValidator = Joi.object({
    Username: Joi.string().min(3).max(20).required().label('Username'),
    Email: Joi.string().allow('').required().label('Email'),
    Password: Joi.string().min(6).max(12).required().label("Password")
})


const ValidatingSignUp = (data) => {
    return signUpValidator.validate(data, { abortEarly: false })
}

module.exports = ValidatingSignUp;