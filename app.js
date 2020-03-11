const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

// Routes
const studentRoutes = require("./routes/students");
const logger = require("./routes/logger");

app.use(express.json());
app.use("/api", logger);
app.use("/api/students", studentRoutes);

module.exports = app;
