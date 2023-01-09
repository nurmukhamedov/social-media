import OnlineUser from "../online-user/OnlineUser.jsx";

import "./RightBar.scss";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="right__container">
          <img
            className="right__container--image"
            src="assets/gift.png"
            alt="birthday"
          />
          <span className="right__container--text">
            <b>Lorem ipsum</b> dolor sit <b>3</b> amet consectetur adipisicing
            elit.
          </span>
        </div>
        <img className="right__wrapper--image" src="assets/ad.png" alt="gift" />
        <h4 className="right__wrapper--title">Online Friends</h4>
        <OnlineUser />
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBar__title">User Information</h4>
        <div className="rightBar__info">
          <div className="rightBar__info--item">
            <span className="rightBar__info--key">City:</span>
            <span className="rightBar__info--value">Tashkent</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="right">
      <div className="right__wrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default RightBar;
