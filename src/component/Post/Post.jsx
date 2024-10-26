// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-key */
import "./Post.css";
import userImg from "../../../public/assets/pic1.jpg";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosMore, IoMdShare } from "react-icons/io";
import { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Post = ({
  caption,
  user,
  time,
  img,
  id,
  initialLike,
  initialShare,
}) => {
  
  const [likes, setLikes] = useState(()=>{
    const savedLikes = localStorage.getItem(id);
    return savedLikes ? parseInt(savedLikes) : initialLike;
    
  });
  // handle like
  const [isLiked, setIsLiked] = useState(true);

  // const [isLiked, setIsLiked] = useState(() => {
  //   // const savedData = localStorage.getItem(id);
  //   // return savedData ? JSON.parse(savedData).isLiked : false;
  // });
  const handleLikeClick = () => {
    const newLikes = isLiked ? likes + 1 : likes - 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    // console.log(`Like: ${newLikes}, Share: ${share}`);

    // update on Local storage
    // localStorage.setItem(id, newLikes);
    // localStorage.setItem(id, JSON.stringify({ likes: newLikes}))
  };

  // share handle
  // const [share, setShare] = useState(()=>{
  //   const savedShare = localStorage.getItem(id);
  //   return savedShare ? parseInt(savedShare) : initialShare;
  // });

  const [share, setShare] = useState(initialShare);
  const handleShareClick = () => {
    const newShare = share + 1;
    setShare(newShare);

    // update on Local Storage
    // localStorage.setItem(id, JSON.stringify({ likes, share: newShare }));
  };
  // Line ellipsis
  const [ellipsis, setEllipsis] = useState(false);
  const handleEllipsis = () => setEllipsis(!ellipsis);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify({ likes, share, isLiked }));
  }, [likes, share, isLiked, id]);


  return (
    <>
      <section className="container">
        <div className="post_card border-b mb-5">
          <div className="row">
            <div className="col user_panel flex items-center justify-between px-5">
              <div className="post_userPanel_wrapper flex gap-2 items-center">
                <img
                  className="userImg h-10 w-10 rounded-full border-2 border-solid border-slate-400"
                  src={userImg}
                  alt="userImg"
                />
                <div className="post_userName_wrapper">
                  <h4 className="userName font-bold flex gap-1 items-center">
                    {user} <MdVerified className="text-[#228BE6]" />
                  </h4>
                  <p className="post_Time text-xs text-slate-600">{time}</p>
                </div>
              </div>
              <IoIosMore />
            </div>
            <div className="col content_panel">
              <div className="content flex flex-col justify-center">
                {ellipsis ? (
                  <p
                    onClick={handleEllipsis}
                    className="cursor-pointer caption whitespace-pre pt-5 pl-5 text-sm text-slate-700"
                  >
                    {caption}
                  </p>
                ) : (
                  <div
                    onClick={handleEllipsis}
                    className="cursor-pointer caption whitespace-pre pt-5 pl-5 text-sm text-slate-700"
                  >
                    <LinesEllipsis
                      text={caption}
                      maxLine={3}
                      ellipsis={<span>..see more</span>}
                      trimRight
                      basedOn="letters"
                    />
                  </div>
                )}
                <img
                  className="mt-3 rounded-xl border shadow-md"
                  src={img}
                  alt={`Post ${id}`}
                />
              </div>
            </div>
            <div className="col reaction_panel pt-5 flex justify-between px-10 pb-5">
              <p className="share flex items-center gap-1 text-2xl text-slate-600">
                <span onClick={handleLikeClick}>
                  {isLiked ? (
                    <FaRegHeart />
                  ) : (
                    <FaHeart className="text-[#ff0000]" />
                  )}
                </span>
                <span className="text-base text-slate-400">
                  {/* {isReacted ? item.like : item.like + 1} */}
                  {likes}
                </span>
              </p>
              <p className="share flex items-center gap-1 text-2xl text-slate-600">
                <span>
                  <IoMdShare onClick={handleShareClick} />
                </span>
                <span className="text-base text-slate-400">{share}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
