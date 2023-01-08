import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="right">
      <div className="right__wrapper">
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
        <ul className="right__menu">
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
          <li className="right__menu--item">
            <div className="right__menu--container">
              <img
                className="right__menu--image"
                src="/assets/person/3.jpeg"
                alt="profile"
              />
              <span className="right__menu--status"></span>
            </div>
            <span className="right__menu--span">Angela Markel</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
