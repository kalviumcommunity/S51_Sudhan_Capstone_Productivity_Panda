const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserSchemaModelChecking = require("../models/userDetails");
require("dotenv").config();

router.post("/GoogleSignupRoutes", async (req, res) => {
  try {
    const { name, email, profile } = req.body;

    let existingUser = await UserSchemaModelChecking.findOne({ Email: email });
    let token;

    if (!existingUser) {
      const newUser = new UserSchemaModelChecking({
        Username: name,
        Email: email,
        Password: null,
        Profile: profile,
      });

      await newUser.save();
      console.log(newUser);

      token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);

      res.status(201).json({ message: "User registered successfully", token });
    } else {
      token = jwt.sign({ userId: existingUser._id }, process.env.
        SECRET_KEY);

      res.status(200).json({ message: "User already exists", token });
    }
  } catch (error) {
    console.error("Error signing up or logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
