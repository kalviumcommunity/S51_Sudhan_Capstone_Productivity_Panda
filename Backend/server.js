const express = require("express")
const monogoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()
const userDetailsModel = require("../Backend/models/userDetails")

const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000;


monogoose.connect(process.env.MongoURL);

app.post("/Sign-Up", (req, res) => {
    userDetailsModel.create(req.body)
    .then(details => res.json(details))
    .catch(err => res.json(err))
    
})
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})