import { Presentation } from "lucide-react";
import Sidebar from "./Sidebar";
import Presentazione from "./Section/Presentazione";

const Home = () => {
  return (
    <div className="home-layout">
      <div>
        <Sidebar />
      </div>
      <div className="section-layout">
        <Presentazione />
      </div>
    </div>
  );
};

export default Home;
