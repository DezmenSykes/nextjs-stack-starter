import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if(mongoose.connections[0].readyState) {
            console.log('Using existing connection', mongoose.connections[0].readyState);
            return true;
        }

        await mongoose.connect(process.env.MONGO_URL);
        console.log(connection, "Mongo is connected.");
        return true;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}