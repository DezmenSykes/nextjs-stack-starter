"use server";

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import {signIn, signOut} from './auth'

export const addPost = async (formData) => {
    // const title = formData.get("title");
    // const description = formData.get("description");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDB();
        const post = new Post({title, desc, slug, userId});
        await post.save();
        console.log("Saved to DB...");
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}
export const deletePost  = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Post.findByIdAndDelete(id);

        console.log("Posted Deleted...");
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}

export const loginWithGithub = async () => {
    "use server"
    await signIn("github")
}
export const logoutWithGithub = async () => {
    "use server"
    await signOut("github")
}

export const registerWithCredentials = async (formData) => {
    "use server"
    const { username, email, password, confirm_password, img } = Object.fromEntries(formData);
    if(password !== confirm_password) {
        return {error: "Passwords do not match"};
    }
    try { 
        connectToDB();

        const user = await User.findOne({username});
        if(user) {
            return {error: "User already exists"};
        }

        const newUser = new User({username, email, password, img});
        await newUser.save();
        console.log("Saved to DB...");
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}