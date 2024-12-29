const { Schema, model } = require("mongoose");

const ApplicationSchema = new Schema(
  {
    userId: Number,
    fullname: String,
    phoneNumber: String,
    school: String,
    grade: String,
  },
  {
    timestamps: true,
  }
);

const Application = model("Application", ApplicationSchema);
module.exports = Application;
