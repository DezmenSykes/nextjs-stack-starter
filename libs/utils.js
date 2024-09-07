import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log('Using existing connection', mongoose.connections[0].readyState);
            return true;
        }

        const db = await mongoose.connect("mongodb+srv://dsykes:Maxwel123@cluster0.os9sv.mongodb.net/nextBlog?retryWrites=true&w=majority&appName=Cluster0");
        connection.isConnected = db.connections[0].readyState;
        
        console.log(connection, "Mongo is connected.");
        return true;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}