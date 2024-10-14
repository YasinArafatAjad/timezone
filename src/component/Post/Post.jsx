/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { IoIosMore, IoMdShare } from "react-icons/io";
import "./Post.css";
import userImg from "../../../public/assets/pic1.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import poste from "../../../public/Post.json";
import { useState } from "react";
import { MdVerified } from "react-icons/md";

const Post = () => {
  const posts = poste.postData;
  const [isReacted, setIsReacted] = useState(<FaRegHeart />);
  const [isShare, setIsShare] = useState(false);
  return (
    <>
      {posts?.map((item, i) => {
        return (
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
                      <h4 className="userName font-bold flex gap-1 items-center">{item.user} <MdVerified className="text-[#228BE6]"/></h4>
                      <p className="post_Time text-xs text-slate-600">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <IoIosMore />
                </div>
                <div className="col content_panel">
                  <div className="content flex flex-col justify-center">
                    <img
                      className="mt-3 rounded-xl border shadow-md"
                      src={item.img}
                      alt={`Post ${i+1}`}
                    />
                    <p className="caption pt-5 text-sm text-slate-700">
                      {item.caption}
                    </p>
                  </div>
                </div>
                <div className="col reaction_panel pt-5 flex justify-between px-10 pb-5">
                  <p className="share flex items-center gap-1 text-2xl text-slate-600">
                    <span
                      onClick={() => {
                        setIsReacted(!isReacted);
                      }}
                    >
                      {!isReacted ? (
                        <FaHeart className="text-[#ff0000]" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </span>
                    <span className="text-base text-slate-400">
                      {isReacted ? item.like : item.like + 1}
                    </span>
                  </p>
                  <p className="share flex items-center gap-1 text-2xl text-slate-600">
                    <span>
                      <IoMdShare
                        onClick={() =>
                          setIsShare((item.share = item.share + 1))
                        }
                      />
                    </span>
                    <span className="text-base text-slate-400">
                      {item.share}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Post;
