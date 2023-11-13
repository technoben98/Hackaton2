const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const PORT = 3000;

//CORS middleware
app.use(cors({ origin: "*" }));

// Parser JSON
app.use(express.json());

// User routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Event routes
const eventRoutes = require("./routes/eventRoutes.js");
app.use("/events", eventRoutes);

// Server side errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// 404 error
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
