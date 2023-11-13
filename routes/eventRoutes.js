const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventController");

// Get all events
router.get("/all", eventsController.getAllEvents);

// Post new event
router.post("/create", eventsController.createEvent);

module.exports = router;
