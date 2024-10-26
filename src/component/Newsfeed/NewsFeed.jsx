import "./NewsFeed.css";
import Post from "./../Post/Post.jsx";
import { useEffect, useState } from "react";
import data from "../../../public/Post.json";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.postData);
  }, []);
  
  return (
    <>
      {posts.map((e) => (
         <Post
         key={e.id}
         id={e.id}
         user={e.user}
         time={e.time}
         caption={e.caption}
         img={e.img}
         video= {e.video}
         initialLike={e.like}
         initialShare={e.share}
       />
      ))}
    </>
  );
};

export default NewsFeed;
