import { Presentation } from "lucide-react";
import Sidebar from "./Sidebar";
import Presentazione from "./Section/Presentazione";
import SidebarRight from "./SidebarRight";

const Home = () => {
  return (
    <div className="home-layout">
      <div>
        <Sidebar />
      </div>
      <div className="section-layout">
        <Presentazione />
      </div>
      <div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default Home;
