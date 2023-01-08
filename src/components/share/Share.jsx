import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

import "./Share.scss";

const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            className="share__top--pic"
            src="/assets/person/1.jpeg"
            alt="share"
          />
          <input
            className="share__top--input"
            placeholder="What is in your mind?"
            type="text"
          />
        </div>
        <hr className="share__top--line" />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia htmlColor="tomato" className="share__option--icon" />
              <span className="share__option--text">Photo or Video</span>
            </div>
            <div className="share__option">
              <Label htmlColor="blue" className="share__option--icon" />
              <span className="share__option--text">Tag</span>
            </div>
            <div className="share__option">
              <Room htmlColor="green" className="share__option--icon" />
              <span className="share__option--text">Location</span>
            </div>
            <div className="share__option">
              <EmojiEmotions
                htmlColor="orange"
                className="share__option--icon"
              />
              <span className="share__option--text">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
