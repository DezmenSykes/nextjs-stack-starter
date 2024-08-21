import { Post, User } from "./models"
import { connectToDB } from "./utils";

// ? - 5PHDxB7zOGEFgGrU

export const getPosts = async () => {
    try {
        connectToDB()

        const posts = Post.find()
        return posts;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDB()

        const post = Post.find(slug)
        return post;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}

export const getUser = async (id) => {
    try {
        connectToDB()

        const user = User.find(id)
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user")
    }
}


export const getUsers = async () => {
    try {
        connectToDB()

        const users = User.find()
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users")
    }
}