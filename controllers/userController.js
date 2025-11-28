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
    const users = await User.find();
    const updateUser = users.findIndex((u) => u._id == id);

    if (updateUser === -1) {
      return res.send("User not found");
    }

    const user = users[updateUser];
    if (body.name) user.name = body.name;
    if (body.email) user.email = body.email;
    if (body.password) user.password = body.password;
    if (body.age) user.age = body.age;
    if (body.maritalStatus !== undefined)
      user.maritalStatus = body.maritalStatus;

    await user.save();
    return res.send("User updated successfully!");
  } catch (error) {
    return res.send("Something went wrong");
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.find();
    const deleteUserIndex = users.findIndex((u) => u._id == id);

    if (deleteUserIndex === -1) {
      return res.send("User not found");
    }

    await users[deleteUserIndex].remove();
    return res.send("User deleted successfully");
  } catch (error) {
    return res.send("Something went wrong");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
