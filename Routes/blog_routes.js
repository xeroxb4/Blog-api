import { Router } from "express"
import { getBlog, getBlogs, postBlog, patchBlog, deleteBlog } from "../controllers/blog_controllers.js";

// Create router
const blogRouter = Router();

blogRouter.get('/blogs/:id', getBlog);
blogRouter.get('/blogs', getBlogs);
blogRouter.post('/blogs', postBlog);
blogRouter.patch('/blogs/:id', patchBlog);
blogRouter.delete('/blogs/:id', deleteBlog);




// Export router
export default blogRouter;