import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Form from "./components//Form";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";
import PostDetails from './components/Posts/PostDetails';
import Posts from './components/Posts/Posts';
import "./index.css"

const App = () => {


      const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

    return (

        <BrowserRouter>
                <Navbar />
                <Routes >
                    <Route path='/' element={  <Posts setcurrentId={setcurrentId} />} />
                    <Route path="form" element={<Form currentId={currentId} setcurrentId={setcurrentId} />} />
                    <Route path="posts/:id" element={<PostDetails setcurrentId={setcurrentId} />} />
                </ Routes >

        </BrowserRouter>

    )
};

export default App;
