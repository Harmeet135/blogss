import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, resp) => {
    try {
        const postMessage = await PostMessage.find();

        resp.status(200).json(postMessage)

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, selectedFile, } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {  title, message,  selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}


export const deletePost = async (req, resp) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return resp.status(404).send('No post with that id');

    await PostMessage.findByIdAndDelete(id);

    resp.json({ message: 'API delete successfully ' })
}

export const getPost = async (req, resp) => {
    const { id } = req.params;
    try {
      const PostMessage = await PostMessage.findById(id);
      resp.status(200).json(PostMessage);
    } catch (error) {
      resp.status(404).json({ message: error.message });
    }
  };
  