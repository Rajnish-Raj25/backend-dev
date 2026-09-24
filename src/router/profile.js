const express = require("express");
const User = require("../models/user");
const profileRouter = express.Router();

profileRouter.get("/users", async (req, res) => {
  try {
    const allProfile = await User.find();
    console.log(allProfile);
    res.status(200).send(allProfile);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" + error.message });
  }
});

profileRouter.patch("/updateuser", async (req, res) => {
  try {
    const { _id, firstName, mobile, email, gender, age } = req.body;
    const getUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      { $set: { firstName: "Alex Smith" } },
    );
    console.log(getUser);
    res.send(getUser);
  } catch (error) {
    res.status(500).json({ message: "something went wrong " + error.message });
  }
});

module.exports = {
  profileRouter,
};
