const pool = require("../config/db");

const createEvent = async (
  title,
  description,
  date,
  organizerId,
  capacity,
  attendees,
  type
) => {
  const query = `
      INSERT INTO events (title, description, date, organizer_id, capacity, attendees, type)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

  const values = [
    title,
    description,
    date,
    organizerId,
    capacity,
    attendees,
    type,
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

const getAllEvents = async () => {
  const query = "SELECT * FROM events";
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error getting all events:", error);
    throw error;
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
