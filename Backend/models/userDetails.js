// Importing mongoose library for MongoDB interactions
const mongoose = require("mongoose")

// Defining a schema for user details using mongoose
const ppdbSchema = new mongoose.Schema({
    // Field for storing the username of the user
    Username: String,
    // Field for storing the email of the user
    Email : String,
    // Field for storing the password of the user
    Password : String,
    // Field for storing the profile of the user
    Profile : String
})

// Creating a mongoose model based on the defined schema
const userDetailsModel = mongoose.model("userDetails", ppdbSchema);

// Exporting the userDetailsModel to be used in other modules
module.exports = userDetailsModel;
