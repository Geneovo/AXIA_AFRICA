const User = require("../models/userModel");

// Create a user
const createUser = async (req, res) => {
  const body = req.body;
  try {
    const newUser = new User(body);
    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error) {
    return res.send("Something went wrong");
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.send("Something went wrong");
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedUser = await User.updateOne({ _id: id }, body);
    return res.json(updatedUser);
  } catch (error) {
    return res.send("Something went wrong");
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.deleteOne({ _id: id });
    return res.json({ message: "User deleted" });
  } catch (error) {
    return res.send("Something went wrong");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};