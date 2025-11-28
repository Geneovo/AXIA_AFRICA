const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// Connection
mongoose
  .connect("mongodb://localhost:27017/Exam")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use(userRoutes);

app.listen(8000, () => {
  console.log("Server is running");
});
