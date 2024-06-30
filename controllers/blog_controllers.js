import { BlogModel } from "../models/blog_models.js";

// Add Blog to database 
export const addBlog = async (req, res) => {

    try{
        // Add Blog
        console.log('request', req.body)
        const addBlog = await BlogModel.create(req.body);
        res.status(200).send('blog added');

    } catch(error) {
        console.log(error);
    }
}

// Delete Blog
export const deleteBlog = async (req, res, next) => {
    try {
        // Delete Something
        const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id, {_id: deleteSomething});
        res.json(deleteBlog);
    } catch (error) {
        next(error)
    }
}


// Get Blog
export const getBlogs =  async (req, res, next) => {
    try {
        const getBlogs = await BlogModel.find();
        res.json("All Blogs");
    } catch (error) {
        next(error);
    }
}

// Get single Blog
export const getSingleBlog = async (req, res, next) => {
    try {
        const getSingleId = await BlogModel.findById(req.params.id);
        res.json("getSingleId");
    } catch (error) {
        next(error);
    }
}


// Update Blog
export const BlogUpdate = async (req, res, next) => {
    try {
        const status = req.body.caseStatus;
        const BlogUpdate = await BlogModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.json("updateStatement");
    } catch (error) {
        next(error);
    }
}