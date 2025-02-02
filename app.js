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
const allowedOrigins = [
  'http://localhost:5173',         // Allow your local development URL (HTTP)
  'https://fastestcreators.com',  // Allow your HTTPS frontend URL
  'http://localhost:5174', // Another HTTP URL
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Reject other origins
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
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
