import express from 'express';
import blogRouter from './Routes/blog_routes.js';




// Create Express App
const app = express();


// Use Router
app.use(express.json());
app.use(blogRouter);



// Listen for incoming requests
app.listen(7080, () => {
    console.log('App listening on port 7080');
});