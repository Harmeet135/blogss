import React from "react";
import { useSelector } from "react-redux";
import Singlepost from "./Singlepost.js";

const Posts = ({ setcurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "8rem", rowGap: "3rem", marginTop: "5rem", marginLeft: "4rem", marginRight: "4rem" }}>
      {!posts.length ? (
        <h1>Nothing to Display</h1>
      ) : (
        posts.map((post) => (
          <Singlepost key={post._id} post={post} setcurrentId={setcurrentId} />
        ))
      )}
    </div>
    )
        }
  
export default Posts;
