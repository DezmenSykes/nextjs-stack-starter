"use server";

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import {signIn, signOut} from './auth'
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
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
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}
export const deletePost  = async (previousState, formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Post.findByIdAndDelete(id);

        console.log("Posted Deleted...");
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}
export const addUser = async (previousState, formData) => {
    const { username,email,password,img } = Object.fromEntries(formData);

    try {
        connectToDB();
        const user = new User({username,email,password,img});   
        await user.save();
        console.log("Saved user to DB...");
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}
export const deleteUser = async (previousState, formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Post.deleteMany({userId: id});
        await User.findByIdAndDelete(id);

        console.log("User Deleted...");
        revalidatePath("/admin")
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

export const registerWithCredentials = async (previousState,  formData) => {
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

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({username, email, password: hashedPassword, img});
        await newUser.save();
        console.log("Saved to DB..."); 

        return {success: true};
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}
export const loginWithCredentials = async (previousState,formData) => {
    "use server"
    const { username, password } = Object.fromEntries(formData);

    try { 
        await signIn("credentials", {
            username,
            password,
            
        }) 
    } catch (error) {
        console.log(error)

        if(error.message.includes("User not found")){
            return {error: "Invalid username or password"}
        }
         
        return {error: "Something went wrong"};
    }
}