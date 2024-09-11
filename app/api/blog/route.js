import { connectToDB } from "@/libs/utils";
import { Post } from "@/libs/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        throw new Error(error); 
    }
}