import mongoose from 'mongoose';



const connectionString = process.env.Mongo_url



export const dbConnection = () => {
    mongoose.connect(connectionString) .then(() => {
        console.log('database is connected')
    });
}; 