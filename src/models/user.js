const mongoose = require("mongoose");
const Validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 50,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "others"],
        message: "{VALUE} is not supported",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: (value) => {
        if (!Validator.isEmail(value)) {
          throw new Error("email is not valid");
        }
      },
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      validate: (value) => {
        if (!Validator.isStrongPassword(value)) {
          throw new Error("password is not strong");
        }
      },
    },
    profileImg: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmt1kma1t84T_pregSlvOoqblmHYxswovbe03aJNBfyS_u42ZRnD7t4Ys&s=10",
      validate: (value) => {
        if (!Validator.isURL(value)) {
          throw new Error("url is not valid");
        }
      },
    },
    skills: {
      type: [String],
    },
    about: {
      type: String,
      default: "This is the default about section",
      maxLength: 200,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
