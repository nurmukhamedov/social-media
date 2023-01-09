import { MoreVert } from "@mui/icons-material";
import { Users } from "../../data";
import { useState } from "react";
import "./Post.scss";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const uniqueNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  const userName = Users.filter(u => u.id === post.userId)[0].username;
  const profilePic = Users.filter(u => u.id === post.userId)[0].profilePicture;
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const disLikeHandler = () => {
    setLike(!isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top--left">
            <img
              className="post__top--profile"
              src={profilePic}
              alt="profile"
            />
            <span className="post__top--name">{userName}</span>
            <span className="post__top--date">{post.date}</span>
          </div>
          <div className="post__top--right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__center--text">{post?.desc}</span>
          <img
            className="post__center--image"
            src={`https://picsum.photos/20${uniqueNum}`}
            alt="post"
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom--left">
            <img
              className="post__bottom--like"
              src="assets/heart.png"
              alt="heart"
              onClick={likeHandler}
            />
            <img
              className="post__bottom--like post__bottom--dislike"
              src="assets/like.png"
              alt="like"
              onClick={disLikeHandler}
            />
            <span className="post__bottom--counter">
              {like} people liked it
            </span>
          </div>
          <div className="post__bottom--right">
            <span className="post__bottom--comments">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
