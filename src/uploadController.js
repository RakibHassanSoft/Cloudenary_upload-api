
const fs = require('fs');
const { uploadToCloudinary, uploadToCloudinaryVideo } = require('./uploadService');



const uploadSingleFile = async (req, res) => {
    try {
        const file = req.file; // Access the file object directly

      
        const result = await uploadToCloudinary(file.path); // Use file path for upload
        fs.unlinkSync(file.path); // Delete local file after upload
        res.status(200).json({ message: 'File uploaded successfully', data: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const uploadMultipleFiles = async (req, res) => {
    try {
        const uploadResults = [];
        for (const file of req.files) {
            const result = await uploadToCloudinary(file.path);
            uploadResults.push(result);
            fs.unlinkSync(file.path); // Delete local file
        }
        res.status(200).json({ message: 'Files uploaded successfully', data: uploadResults });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller for uploading a single video file
const uploadSingleFileVideo = async (req, res) => {
    try {
        const file = req.file; // Access the video file object
        const result = await uploadToCloudinaryVideo(file.path); // Upload video file
        fs.unlinkSync(file.path); // Delete local file after upload
        res.status(200).json({ message: 'File uploaded successfully', data: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller for uploading multiple video files
const uploadMultipleFilesVideo = async (req, res) => {
    try {
        const uploadResults = [];
        for (const file of req.files) {
            const result = await uploadToCloudinaryVideo(file.path); // Upload video file
            uploadResults.push(result);
            fs.unlinkSync(file.path); // Delete local file after upload
        }
        res.status(200).json({ message: 'Files uploaded successfully', data: uploadResults });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { uploadSingleFile, uploadMultipleFiles,uploadSingleFileVideo,uploadMultipleFilesVideo };
