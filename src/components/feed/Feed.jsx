import Post from "../post/Post";
import Share from "../share/Share";

import "./Feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
