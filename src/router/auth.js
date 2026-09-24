const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { Validations } = require("../utils/validations");

userRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, age, gender, password } =
      req.body;

    console.log(firstName, lastName);

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      mobile,
      age,
      gender,
    });
    console.log(newUser);

    console.log("running here");
    Validations(req);

    await newUser.save();
    res.status(201).json({ message: "User save successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong " + error.message });
  }
});

module.exports = {
  userRouter,
};
