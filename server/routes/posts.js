import express from "express";

import { getPosts, createPost, deletePost, updatePost, getPost } from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5000/posts


router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getPost);


export default router;



