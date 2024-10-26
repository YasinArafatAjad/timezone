// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-key */
import "./Post.css";
import userImg from "../../../public/assets/pic1.jpg";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosMore, IoMdShare } from "react-icons/io";
import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Post = ({ id, user, time, img, video, caption, initialLike, initialShare }) => {
  // handle like
  const [likes, setLikes] = useState(initialLike);
  const [isLiked, setIsLiked] = useState(true);

  const handleLikeClick = () => {
    {
      isLiked ? setLikes(likes + 1) : setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };

  // share handle
  const [share, setShare] = useState(initialShare);
  const handleShareClick = () => {
    const newShare = share + 1;
    setShare(newShare);
  };

  // Line ellipsis
  const [ellipsis, setEllipsis] = useState(false);
  const handleEllipsis = () => setEllipsis(!ellipsis);

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
                      ellipsis={<span>...see more</span>}
                      trimRight
                      basedOn="letters"
                    />
                  </div>
                )}
                 {video ? ( // Conditional rendering for video
                  <video
                    className="mt-3 rounded-xl border shadow-md max-h-[80vh]"
                    controls
                    src={video}
                    alt={`Post ${id}`}
                  />
                ) : (
                  <img
                    className="mt-3 rounded-xl border shadow-md"
                    src={img}
                    alt={`Post ${id}`}
                  />
                )}
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
                <span className="text-base text-slate-400">{likes}</span>
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
