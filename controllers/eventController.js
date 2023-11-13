const eventModel = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    const { title, description, date, capacity, attendees } = req.body;
    const organizerId = req.user.id;

    const newEvent = await eventModel.createEvent(
      title,
      description,
      date,
      organizerId,
      capacity,
      attendees
    );

    await userModel.updateOrganizerStatus(organizerId, true);

    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.getAllEvents();

    res.status(200).json({ events });
  } catch (error) {
    console.error("Error getting all events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
