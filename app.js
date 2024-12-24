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

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



/*
import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [urls, setUrls] = useState([]); // State to store URLs

  const handleFileUploadResponse = (response) => {
    if (response && response.data) {
      const fileUrls = response.data.map(file => file.url); // Extract URLs
      setUrls(fileUrls); // Store URLs in state
    }
  };

  // Simulate the response
  const mockResponse = {
    message: "Files uploaded successfully",
    data: [
      {
        asset_id: "cadab7d1c2d04db1e1c431ae729bf91e",
        url: "http://res.cloudinary.com/dvdyfyryz/video/upload/v1735060288/uploads/o18qfczeql9hmntzj6cg.mp4",
      },
      {
        asset_id: "079b1b1a9b3f7f788e391623e40fe012",
        url: "http://res.cloudinary.com/dvdyfyryz/video/upload/v1735060291/uploads/wcfgegchljpbwtc9rllq.mp4",
      }
    ]
  };

  // Simulate handling response after upload
  React.useEffect(() => {
    handleFileUploadResponse(mockResponse); // Call the function to handle the mock response
  }, []);

  return (
    <div>
      <h3>Uploaded Video URLs:</h3>
      <ul>
        {urls.map((url, index) => (
          <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploadComponent;


*/