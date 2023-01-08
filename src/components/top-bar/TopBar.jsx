import "./TopBar.scss";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
const TopBar = () => {
  return (
    <>
      <div className="bar">
        <div className="bar__left">
          <span className="bar__left--logo">Social Media</span>
        </div>
        <div className="bar__center">
          <div className="bar__center--search">
            <Search className="bar__center--searchIcon" />
            <input
              placeholder="search for friend, post or video"
              className="bar__center--input"
              type="text"
            />
          </div>
        </div>
        <div className="bar__right">
          <div className="bar__right--links">
            <span className="bar__right--items">Homepage</span>
            <span className="bar__right--items">Timeline</span>
          </div>
          <div className="bar__right--icons">
            <div className="bar__right--iconItems">
              <Person />
              <span className="bar__right--iconBadge">1</span>
            </div>
            <div className="bar__right--iconItems">
              <Chat />
              <span className="bar__right--iconBadge">2</span>
            </div>
            <div className="bar__right--iconItems">
              <Notifications />
              <span className="bar__right--iconBadge">1</span>
            </div>
          </div>
          <img
            src="/assets/person/1.jpeg"
            alt="profile"
            className="bar__right--profile"
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
