import { Router } from "express"
import { getSingleBlog, getBlogs, addBlog, BlogUpdate, deleteBlog } from "../controllers/blog_controllers.js";

// Create router
const blogRouter = Router();

blogRouter.get("/blogs/:id", getSingleBlog);
blogRouter.get("/blogs", getBlogs);
blogRouter.post('/blogs', addBlog);
blogRouter.patch('/blogs/:id', BlogUpdate);
blogRouter.delete('/blogs/:id', deleteBlog);




// Export router
export default blogRouter;