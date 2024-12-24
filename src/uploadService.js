const { v2: cloudinary } = require('cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath, folder = 'uploads') => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder,
        });
        return result;
    } catch (error) {
        throw new Error('Cloudinary upload failed: ' + error.message);
    }
};
const uploadToCloudinaryVideo = async (filePath, folder = 'uploads') => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder,
            resource_type: 'video', // Specify that it's a video file
        });
        return result;
    } catch (error) {
        throw new Error('Cloudinary upload failed: ' + error.message);
    }
}

module.exports = { uploadToCloudinary ,uploadToCloudinaryVideo};
