// packages
const { Router } = require("express");
const {
  getAllApplications,
  createApplication,
} = require("../controllers/application.controller");

// router
const router = Router();

// endpoints
router.get("/all", getAllApplications);
router.post("/create", createApplication);

module.exports = router;
