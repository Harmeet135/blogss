import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux'
import { createPost  , updatePost} from "../redux/actions/posts";
import "./form.css"
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setcurrentId }) => {

  const [postData, setpostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
  currentId ? state.posts.find((p) => p._id === currentId) : null
);

useEffect(() => {
  if (post) {
    setpostData(post);
  }
}, [post]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEditing = currentId !== 0;
  const formHeading = isEditing ? "Edit the Blog" : "Create a Blog";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }

    navigate('/');
    setcurrentId(0);
  };

  const clear = () => {
    setcurrentId(0);
    setpostData({
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  return (
    <>

        <div id="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 id="create-memory">{formHeading}</h1>
            <div id="form-input">
           
        
              <input className="form-input"
                type="text"
                placeholder="title"
                value={postData.title}
                onChange={(e) => setpostData({ ...postData, title: e.target.value })}
              />
              <input className="form-input"
                type="text"
                placeholder="message"
                value={postData.message}
                onChange={(e) => setpostData({ ...postData, message: e.target.value })}
              />
             
            </div>

            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setpostData({ ...postData, selectedFile: base64 })
              }
            />

            <div id="form-button">
              <button className="form-button">Submit</button>
              <button className="form-button" onClick={clear}>Clear</button>
            </div>
          </form>
        </div>


    </>
  );
};

export default Form;
