import { Users } from "../../data";

import "./OnlineUser.scss";

const OnlineUser = () => {
  const onlineUsers = Users.map(user =>
    user.status === true ? (
      <li key={user.id} className="right__menu--item">
        <div className="right__menu--container">
          <img
            className="right__menu--image"
            src={user.profilePicture}
            alt="profile"
          />

          <span className="right__menu--status"></span>
        </div>
        <span className="right__menu--span">{user.username}</span>
      </li>
    ) : (
      <li key={user.id}></li>
    )
  );
  return (
    <div>
      <ul className="right__menu">{onlineUsers}</ul>
    </div>
  );
};

export default OnlineUser;
