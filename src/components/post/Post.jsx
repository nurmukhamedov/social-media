import { MoreVert } from "@mui/icons-material";
import "./Post.scss";
const Post = () => {
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top--left">
            <img
              className="post__top--profile"
              src="/assets/person/1.jpeg"
              alt="profile"
            />
            <span className="post__top--name">Irina Sheyk</span>
            <span className="post__top--date">5 min ago</span>
          </div>
          <div className="post__top--right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__center--text">My first tweet</span>
          <img
            className="post__center--image"
            src="/assets/post/1.jpeg"
            alt="post"
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom--left">
            <img className="post__bottom--like" src="assets/like.png" alt="" />
            <img className="post__bottom--like" src="assets/heart.png" alt="" />
            <span className="post__bottom--counter">32 people liked it</span>
          </div>
          <div className="post__bottom--right">
            <span className="post__bottom--comments">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
