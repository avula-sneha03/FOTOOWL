import express from 'express';


import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { addUser, getUser } from '../controller/user-controller.js';
import { newMessage, getMessage }from '../controller/message-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { uploadFile } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);


route.get('/file/:filename', getImage);

route.post('/file/upload', upload.single('file'), (req, res, next) => {
    console.log('Uploaded file details:', req.file);
    if (!req.file) {
        return res.status(400).send('File upload failed');
    }
    next();
}, uploadFile);


export default route;