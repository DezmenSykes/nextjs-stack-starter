import { connectToDB } from "./utils";
import { Post } from "./models";

export const addPost = async (formData) => {
    "use server"
    // const title = formData.get("title");
    // const description = formData.get("description");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDB();
        const post = new Post({title, desc, slug, userId});
        await post.save();
        console.log("Saved to DB...")
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"};
    }
}