import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';

let gfs, gridfsBucket;

// Initialize GridFS
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs', // Ensure bucket name matches multer-gridfs-storage config
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
    console.log('GridFS initialized successfully');
});

// Upload a file
export const uploadFile = async (request, response) => {
    try {
        if (!request.file) {
            return response.status(404).json({ message: 'File not found' });
        }

        const imageUrl = `${url}/file/${request.file.filename}`;
        return response.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error uploading file:', error.message);
        return response.status(500).json({ message: 'File upload failed', error: 'error in uplading file' });
    }
};

// Upload an image
export const uploadImage = (request, response) => {
    try {
        if (!request.file) {
            return response.status(404).json({ message: 'File not found' });
        }

        const imageUrl = `${url}/file/${request.file.filename}`;
        return response.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error.message);
        return response.status(500).json({ message: 'Image upload failed', error: error.message });
    }
};

// Retrieve an image
export const getImage = async (request, response) => {
    try {
        if (!gfs || !gridfsBucket) {
            return response.status(500).json({ message: 'GridFS not initialized' });
        }

        const file = await gfs.files.findOne({ filename: request.params.filename });
        if (!file) {
            return response.status(404).json({ message: 'File not found' });
        }

        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        console.error('Error retrieving file:', error.message);
        return response.status(500).json({ message: 'Failed to retrieve file', error: error.message });
    }
};
