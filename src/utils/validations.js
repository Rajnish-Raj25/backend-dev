const Validator = require("validator");
const Validations = (req) => {
  const { firstName, lastName, email, mobile, age, gender, password } =
    req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please enter  all required field");
  } else if (!Validator.isEmail(email)) {
    throw new Error("email is not valid");
  } else if (!Validator.isStrongPassword(password)) {
    throw new Error("Please enter strong password");
  }
};

module.exports = { Validations };
