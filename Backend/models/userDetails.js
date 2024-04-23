const mongoose = require("mongoose")

const ppdbSchema = new mongoose.Schema({
    Username: String,
    Email : String,
    Password : String
})

const userDetailsModel = mongoose.model("userDetails", ppdbSchema);
module.exports = userDetailsModel;