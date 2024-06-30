import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    blogId: { type: String },
    contentType: { enum: ['educational', 'spiritual', 'emotional']},
        createdAt: { type: Date, default:Date.now},
        updatedAt: { type: Date, default:Date.now}

    });






export const BlogModel = model('blog', blogSchema)