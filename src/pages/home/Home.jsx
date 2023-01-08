import RightBar from "../../components/right-bar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/top-bar/TopBar";
import Feed from "../../components/feed/Feed";

import "./Home.scss";
const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
