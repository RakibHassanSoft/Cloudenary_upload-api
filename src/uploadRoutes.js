const express = require('express');
const multer = require('multer');
const { uploadSingleFile, uploadMultipleFiles, uploadSingleFileVideo, uploadMultipleFilesVideo } = require('./uploadController');

const router = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: 'temp/' });

// Single file upload: expects a field name 'file'
router.post('/single', upload.single('file'), uploadSingleFile);

// Single file upload: expects a field name 'file'
router.post('/single-video', upload.single('file'), uploadSingleFileVideo);

// Multiple files upload: expects a field name 'files'
router.post('/multiple', upload.array('files', 10), uploadMultipleFiles);

// Multiple files upload: expects a field name 'files'
router.post('/multiple-video', upload.array('files', 10), uploadMultipleFilesVideo);


module.exports = router;

