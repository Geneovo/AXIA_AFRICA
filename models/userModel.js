const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    maritalStatus: Boolean,
  }
);

const model = mongoose.model("User", userSchema);

module.exports = model;