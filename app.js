// app.js
const express = require('express');
const dotenv = require('dotenv');
const fileRoutes = require('./src/uploadRoutes'); // File upload routes
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS for all origins
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your frontend's origin
    credentials: true, // Allow credentials
  }) // <- Closing parenthesis added here
);

// File upload routes
app.use('/files', fileRoutes);

app.get('/', (req, res) => {
  res.send("Server is running fine!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
