// app.js
const express = require('express');
const dotenv = require('dotenv');
const fileRoutes = require('./src/uploadRoutes'); // File upload routes
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT ;

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS for all origins
app.use(cors({
  origin: '*', // Allow all origins
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));


// File upload routes
app.use('/files', fileRoutes);

app.use('/', (req,res)=>{
    res.send("server is okay")
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


