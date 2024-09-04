import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log('Using existing connection')
            return;
        }

        const db = await mongoose.connect("mongodb+srv://dsykes:5PHDxB7zOGEFgGrU@cluster0.os9sv.mongodb.net/nextBlog?retryWrites=true&w=majority&appName=Cluster0")
        connection.isConnected = db.connections[0].readyState;
        console.log(connection)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}