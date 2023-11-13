const pool = require("../config/db");

// Register part

const createUser = async (
  username,
  firstName,
  lastName,
  email,
  password,
  phoneNumber
) => {
  const query = `
      INSERT INTO tentovausers (username, firstname, lastname, email, passwordvalue, phonenumber)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
  `;

  const values = [username, firstName, lastName, email, password, phoneNumber];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// login part

const getUserByLogin = async (username) => {
  const query = "SELECT * FROM tentovausers WHERE username = $1";
  const values = [username];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error getting user by login:", error);
    throw error;
  }
};

// update organizer
const updateOrganizerStatus = async (userId, isOrganizer) => {
  const query =
    "UPDATE tentovausers SET organizer = $2 WHERE id = $1 RETURNING *";
  const values = [userId, isOrganizer];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error updating organizer status:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByLogin,
  updateOrganizerStatus,
};
