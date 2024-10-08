import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 6
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

 const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

const testingSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: false
    }
})

export const User = mongoose.models?.user || mongoose.model("user", userSchema)
export const Post = mongoose.models?.post || mongoose.model("post", postSchema)
export const Testing = mongoose.models?.testing || mongoose.model("testing", testingSchema)