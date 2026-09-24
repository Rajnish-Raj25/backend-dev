const express = require("express");
const userAuth = require("./middlewares/auth");
const connectDB = require("./config/database");

const { userRouter } = require("./router/auth");
const { profileRouter } = require("./router/profile");

const app = express();
app.use(express.json());

app.use("/", userRouter);
app.use("/", profileRouter);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5555, () => {
      console.log("server is listening at port 5555");
    });
  })
  .catch((err) => {
    console.log("cannot connect to database" + err.message);
  });
