const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tenTova",
  password: "super98",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Error connecting to the database:", error));

module.exports = pool;
