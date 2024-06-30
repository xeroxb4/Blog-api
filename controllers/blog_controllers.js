import { BlogModel } from "../models/blog_models.js";

// Add Blog to database 
export const postBlog = async (req, res) => {

    try{
        // Add Blog
        console.log('request', req.body)
        const patchBlog = await BlogModel.create(req.body);
        res.status(200).send(blogadded);

    } catch(error) {
        console.log(error);
    }
}

// Delete Blog
export const deleteBlog = async (req, res, next) => {
    try {
        // Delete Something
        const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id);
        res.json(deleteBlog);
    } catch (error) {
        next(error);
    }
}


// Get Blog
export const getBlogs =  async (req, res, next) => {
    try {
        const getBlogs = await BlogModel.find();
        res.json(getBlogs);
    } catch (error) {
        next(error);
    }
}

// Get single Blog
export const getBlog = async (req, res, next) => {
    try {
        const getSingleId = await BlogModel.findById(req.params.id);
        res.json(getSingleId);
    } catch (error) {
        next(error);
    }
}


// Update Blog
export const patchBlog = async (req, res, next) => {
    try {
        const patchBlog = await BlogModel.findByIdAndUpdate(req.params.id); 
        res.json(blogupdated);
    } catch (error) {
        next(error);
    }
}