'use server'
import mongoose from "mongoose";
import { Post, Testing, User, postSchema } from "./models"
import { connectToDB } from "./utils";

// ?? - 7C8OfqD5JAupgOZm

export async function getPosts() {
    try {
        await connectToDB();
        const testData = await Testing.findOne();
        console.log(testData);

        return posts;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

/*export const getPost = async (slug) => {
    try {
        await connectToDB()

        const post = await Post.find({slug})
        return post;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}

export const getUser = async (id) => {
    try {
        await connectToDB()

        const user = await User.findOne(id)
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user")
    }
}


export const getUsers = async () => {
    try {
        await connectToDB()

        const users = await User.find()
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users")
    }
}*/