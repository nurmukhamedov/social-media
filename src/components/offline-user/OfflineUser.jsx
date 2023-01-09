import { Users } from "../../data";

import "./OfflineUser.scss";
const OfflineUser = () => {
  const offlineUsers = Users.map(user =>
    user.status === false ? (
      <li key={user.id} className="right__menu--item">
        <div className="right__menu--container">
          <img
            className="right__menu--image"
            src={user.profilePicture}
            alt="profile"
          />
        </div>
        <span className="right__menu--span">{user.username}</span>
      </li>
    ) : (
      <li key={user.id}></li>
    )
  );
  return (
    <div>
      <ul className="right__menu">{offlineUsers}</ul>
    </div>
  );
};

export default OfflineUser;
