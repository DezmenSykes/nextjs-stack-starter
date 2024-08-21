import mongoose from "mongoose";
import { Post, User } from "./models"
import { connectToDB } from "./utils";

// ? - 5PHDxB7zOGEFgGrU

export const getPosts = async () => {
    try {
        connectToDB()
        const posts = await Post.find();
        console.log(posts);

        return posts;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const getPost = async (slug) => {
    try {
        connectToDB()

        const post = await Post.findOne({slug})
        return post;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}

export const getUser = async (id) => {
    try {
        connectToDB()

        const user = await User.findOne(id)
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user")
    }
}


export const getUsers = async () => {
    try {
        connectToDB()

        const users = await User.find()
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users")
    }
}