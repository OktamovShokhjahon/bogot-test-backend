// packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routes
const ApplicationRoute = require("./routes/application.route.js");

// app
const app = express();

// config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// endpoints
app.use("/api/application", ApplicationRoute);

// start
function start() {
  try {
    const PORT = process.env.PORT || 4100;
    const MONGO_URI = process.env.MONGO_URI;

    app.listen(PORT, () =>
      console.log(`App has been started at http://localhost:${PORT}`)
    );
    mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
}

start();
