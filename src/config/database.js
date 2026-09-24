const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const MONGODB_URI =
      "mongodb+srv://rajnish25acin:rajnish25acin123@namastedev.ztmaek4.mongodb.net/backendDev";

    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("something went wrong", error.message);
  }
};

module.exports = connectDB;
