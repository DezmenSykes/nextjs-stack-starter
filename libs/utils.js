import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log('Using existing connection', mongoose.connections[0].readyState);
            return true;
        }

        const db = await mongoose.connect(process.env.MONGO_URL);
        connection.isConnected = db.connections[0].readyState;
        
        console.log(connection, "Mongo is connected.");
        return true;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}