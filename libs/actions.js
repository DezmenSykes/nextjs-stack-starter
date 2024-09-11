"use server";

import { connectToDB } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";
import {signIn} from './auth'

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