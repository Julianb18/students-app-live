const express = require("express");

const app = express();

// Routes
const studentRoutes = require("./routes/students");

app.use(express.json());
app.use("/api/students", studentRoutes);

module.exports = app;
