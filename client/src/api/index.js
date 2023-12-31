import axios from 'axios';

const url = 'https://blogs-8veh.onrender.com/posts';
// const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const fetchPost = (id) => axios.get(`${url}/${id}`);