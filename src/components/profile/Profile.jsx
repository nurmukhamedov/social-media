import RightBar from "../../components/right-bar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/top-bar/TopBar";
import Feed from "../../components/feed/Feed";

import "./Profile.scss";

export const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__right--top">
            <div className="profile__right--cover">
              <img
                className="profile__right--image"
                src="/assets/post/3.jpeg"
                alt="post"
              />
              <img
                className="profile__right--userImg"
                src="/assets/person/7.jpeg"
                alt="person"
              />
            </div>
            <div className="profile__right--info">
              <h4 className="profile__right--name">Jack Fury</h4>
              <span className="profile__right--text">Nothing is forever</span>
            </div>
          </div>
          <div className="profile__right--bottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};
