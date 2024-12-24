// app.js
const express = require('express');
const dotenv = require('dotenv');
const fileRoutes = require('./src/uploadRoutes'); // File upload routes

dotenv.config();

const app = express();
const port = process.env.PORT ;

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// File upload routes
app.use('/files', fileRoutes);

app.use('/', (req,res)=>{
    res.send("server is okay")
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


