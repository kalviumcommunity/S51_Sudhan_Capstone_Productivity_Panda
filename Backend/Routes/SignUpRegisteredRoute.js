const express = require("express");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const userDetailsModel = require("../models/userDetails");
const ValidatingSignUp = require("../Validators/SignUpValidator");
require('dotenv').config();

const SignUpRegisteringRoute = express.Router();

// Route for user registration
SignUpRegisteringRoute.post("/Sign-Up", async (req, res) => {
  try {
    const { error } = ValidatingSignUp(req.body);
    if (error) {
      return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }

    const existingEmail = await userDetailsModel.findOne({ Email: req.body.Email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const existingUsername = await userDetailsModel.findOne({ Username: req.body.Username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    const newUser = new userDetailsModel({
      Username: req.body.Username,
      Email: req.body.Email,
      Password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = JWT.sign({ userID: savedUser._id }, process.env.SECRET_KEY, { expiresIn: "2h" });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = SignUpRegisteringRoute;