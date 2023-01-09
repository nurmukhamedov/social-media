import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Bookmarks,
} from "@mui/icons-material";

import OfflineUsers from "../offline-user/OfflineUser.jsx";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <li className="sidebar__menu--item">
            <RssFeed />
            <span className="sidebar__menu--text">Feed</span>
          </li>
          <li className="sidebar__menu--item">
            <Chat />
            <span className="sidebar__menu--text">Chats</span>
          </li>
          <li className="sidebar__menu--item">
            <PlayCircleFilledOutlined />
            <span className="sidebar__menu--text">Videos</span>
          </li>
          <li className="sidebar__menu--item">
            <Group />
            <span className="sidebar__menu--text">Groups</span>
          </li>
          <li className="sidebar__menu--item">
            <Bookmarks />
            <span className="sidebar__menu--text">Bookmarks</span>
          </li>
          <li className="sidebar__menu--item">
            <HelpOutline />
            <span className="sidebar__menu--text">Questions</span>
          </li>
          <li className="sidebar__menu--item">
            <WorkOutline />
            <span className="sidebar__menu--text">Jobs</span>
          </li>
          <li className="sidebar__menu--item">
            <Event />
            <span className="sidebar__menu--text">Events</span>
          </li>
          <li className="sidebar__menu--item">
            <School />
            <span className="sidebar__menu--text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__line" />
        <OfflineUsers />
      </div>
    </div>
  );
};

export default Sidebar;
