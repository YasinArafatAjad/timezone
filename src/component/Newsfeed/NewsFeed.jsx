import "./NewsFeed.css";
import Post from "./../Post/Post.jsx";
import { useEffect, useState } from "react";
import data from "../../../public/Post.json";
// import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.postData);
  }, []);

  return (
    <>
      {posts.map((e) => (
        <div key={e.id}>
          {/* <Link to={`/post/${e.id}`}> */}
            <Post
              id={e.id}
              user={e.user}
              date={e.date}
              time={e.time}
              caption={e.caption}
              img={e.img}
              video={e.video}
              initialLike={e.like}
              initialShare={e.share}
            />
          {/* </Link> */}
        </div>
      ))}
    </>
  );
};

export default NewsFeed;
