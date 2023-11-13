const userModel = require("../models/userModel");

// Register part
const registerUser = async (req, res) => {
  try {
    const { username, firstName, lastName, email, password, phoneNumber } =
      req.body;

    const userExists = await userModel.getUserByLogin(username);

    if (userExists) {
      console.log("User with this username already exists");
      return res
        .status(409)
        .json({ message: "User with this username already exists" });
    }

    const newUser = await userModel.createUser(
      username,
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login Part
const validateUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("request recieved");
  try {
    const user = await userModel.getUserByLogin(username);

    if (user.passwordvalue === password) {
      res.json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error validating user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  registerUser,
  validateUser,
};
