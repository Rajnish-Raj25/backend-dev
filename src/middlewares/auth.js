const userAuth = (req, res, next) => {
  try {
    const token = "ss";
    if (token === "ss") {
      next();
    } else {
      res.status(401).send("unauthorised !!");
    }
  } catch (error) {
    res.json({ message: "something went wrong" + error.message });
  }
};

module.exports = userAuth;
