// models
const Application = require("../models/Application");

// get all application
async function getAllApplications(req, res) {
  try {
    const applications = await Application.find();

    res.send({
      ok: true,
      applications,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      message: err.message,
    });
  }
}

// create application
async function createApplication(req, res) {
  try {
    const { fullname, userId, phoneNumber, school, grade } = req.body;

    if (!fullname || !userId || !school || !grade || !phoneNumber) {
      return res.status(400).send({
        ok: false,
        message: "All fields are required",
      });
    }

    const application = new Application({
      fullname,
      userId,
      phoneNumber,
      school,
      grade,
    });
    const savedApplication = await application.save();

    res.status(200).send({
      ok: true,
      application: savedApplication,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      message: err.message,
    });
  }
}

module.exports = { getAllApplications, createApplication };
