import RightBar from "../../components/right-bar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/top-bar/TopBar";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <RightBar />
    </div>
  );
};

export default Home;
