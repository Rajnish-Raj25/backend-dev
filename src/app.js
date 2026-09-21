const express = require("express");

const app = express();
app.use("/test", (req, res) => {
  res.send("hell9 from");
});

app.listen(5555, () => {
  console.log("server is running at port 5555");
});
