import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const USERNAME=process.env.DB_USERNAME
const PASSWORD= process.env.DB_PASSWORD
const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@clone-whatsapp-shard-00-00.7q8fl.mongodb.net:27017,clone-whatsapp-shard-00-01.7q8fl.mongodb.net:27017,clone-whatsapp-shard-00-02.7q8fl.mongodb.net:27017/?ssl=true&replicaSet=atlas-zo4nts-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Clone-Whatsapp`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;